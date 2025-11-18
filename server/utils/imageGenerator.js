require("dotenv").config({ path: __dirname + "/../.env" });
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const STABILITY_API_KEY = process.env.STABILITY_API_KEY;

if (!STABILITY_API_KEY) {
  console.error("Missing stability ai key");
  process.exit(1);
}

async function downloadImage(url, filePath) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  fs.writeFileSync(filePath, response.data);
}

async function generateProductImage(title, description, category, id) {
  const prompt = `${title} - ${description}. Professional product photo for ${category}.`;
  const outputDir = `${__dirname}/../images/${category}`;
  const filePath = `${outputDir}/${id}.png`;
  const relativePath = `images/${category}/${id}.png`;

  // Check cache
  if (fs.existsSync(filePath)) {
    console.log(`Using cached image for ${title}`);
    return relativePath;
  }

  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Generating image for ${title}..`);

  const form = new FormData();
  form.append("prompt", prompt);
  form.append("output_format", "png");

  try {
    const response = await axios.post(
      "https://api.stability.ai/v2beta/stable-image/generate/ultra",
      form,
      {
        responseType: "arraybuffer",
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${STABILITY_API_KEY}`,
          ...form.getHeaders(),
          Accept: "image/*",
        },
      }
    );

    if (response.status === 200) {
      fs.writeFileSync(filePath, Buffer.from(response.data));
      console.log(`Saved image: ${filePath}`);
      return relativePath;
    }

    if (response.status === 402) {
      console.warn("Stability credits exhausted - switching to Pollinations...");
      const fallbackURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
      await downloadImage(fallbackURL, filePath);
      console.log(`Fallback image saved: ${filePath}`);
      return relativePath;
    }

    console.error(`Stability API returned ${response.status}`);
    return relativePath;

  } catch (err) {
    console.error(`Error generating image for ${title}: ${err.message}`);
    console.warn("Switching to Pollinations fallback...");

    try {
      const fallbackURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
      await downloadImage(fallbackURL, filePath);
      console.log(`Fallback image saved: ${filePath}`);
      return relativePath;
    } catch (pollError) {
      console.error("Pollinations fallback failed:", pollError.message);
      return null;
    }
  }
}

module.exports = { generateProductImage };
