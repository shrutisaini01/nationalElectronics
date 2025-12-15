require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const productRoutes = require("./routes/productRoutes");
const { loadProductsFromCSV } = require("./utils/csvLoader");
const ROOT_DIR=process.cwd();


const app = express();
app.use(cors());
app.use(express.json());

const IMAGES_DIR = path.join(__dirname, "images");

app.use("/images/fans", express.static(path.join(IMAGES_DIR, "fans")));
app.use("/images/bulbs", express.static(path.join(IMAGES_DIR, "bulbs")));
app.use("/images/lights", express.static(path.join(IMAGES_DIR, "lights")));
app.use("/images/appliances", express.static(path.join(IMAGES_DIR, "appliances")));
app.use("/images/switches", express.static(path.join(IMAGES_DIR, "switches")));

app.use("/api", productRoutes);

app.get("/", (req, res) => {
    res.send("App is listening on port 5000!");
});

async function initializeProductImages() {
    const markerPath = path.join(__dirname, "images", ".initialized");

    if (fs.existsSync(markerPath)) {
        console.log("✅ Images already initialised - skipping regeneration");
        return;
    }

    console.log("🚀 First-time setup - generating missing product images...");

    const categories = [
        { name: "fans", path: path.join(__dirname, "data", "fans.csv") },
        { name: "bulbs", path: path.join(__dirname, "data", "bulbs.csv") },
        { name: "lights", path: path.join(__dirname, "data", "lights.csv") },
        { name: "appliances", path: path.join(__dirname, "data", "appliances.csv") },
        { name: "switches", path: path.join(__dirname, "data", "switches.csv") }
    ];

    try {
        for (const c of categories) {
            await loadProductsFromCSV(c.name, c.path);
        }
        fs.writeFileSync(markerPath, "initialized");
        console.log("✅ Initial image setup completed!");
    } catch (err) {
        console.error("❌ Error during image setup:", err);
    }
}

initializeProductImages().then(() => {
    app.listen(5000, () => console.log("✅ Server running on port 5000!"));
});
