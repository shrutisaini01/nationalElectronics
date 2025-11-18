const fs = require("fs");
const csv = require("csv-parser");
const {isPlaceholder} = require("./placeholder");
const {generateProductImage} = require("./imageGenerator");
const {parse} = require("json2csv");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

async function loadProductsFromCSV(category,filePath){
    const rows=[];
    const updatedRows=[];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (row) => rows.push(row))
            .on("end",async()=>{
                console.log(`\n Processing ${category} CSV (${rows.length} rows)....`);
                for(const [index,row] of rows.entries()){
                    const id=row.ID||row.Id||row.id||(index+1);
                    const title=row.Title||row.title||"Untitled";
                    const description=row.Description||row.description||""
                    const price=row["Estimated Price"]||row.price||"";
                    let image=row.Image||row.image||"";

                    try{
                        if(isPlaceholder(image)){
                            image=await generateProductImage(title,description,category,id);
                            await delay(700);
                        }
                    }catch(err){
                        console.error(`Error generating image for ${title}: `, err.message);
                    }

                    updatedRows.push({
                        Image: image,
                        ID:id,
                        Title: title,
                        "Estimated Price": price,
                        Description: description,
                    });
                }

                const csvData=parse(updatedRows);
                fs.writeFileSync(filePath,csvData);
                console.log(`Updated csv saved: ${filePath}`);

                resolve(updatedRows);
            })
            .on("error", (err)=> {
                console.error(`Failed to load csv (${category}): `,err.message);
                reject(err);
            });
    });
}

module.exports={loadProductsFromCSV};