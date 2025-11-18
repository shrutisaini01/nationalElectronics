const fs = require("fs");
const path=require("path");
const { loadProductsFromCSV } = require("../utils/csvLoader");

const ROOT_DIR=process.cwd();

const categoryFiles={
    fans: path.join(ROOT_DIR,"data/fans.csv"),
    bulbs: path.join(ROOT_DIR,"data/bulbs.csv"),
    appliances: path.join(ROOT_DIR,"data/appliances.csv"),
    lights: path.join(ROOT_DIR,"data/lights.csv"),
    switches: path.join(ROOT_DIR,"data/switches.csv"),
}

const imageFiles={
    fans: path.join(ROOT_DIR,"images/fans"),
    bulbs: path.join(ROOT_DIR,"images/bulbs"),
    appliances: path.join(ROOT_DIR,"images/appliances"),
    lights: path.join(ROOT_DIR,"images/lights"),
    switches: path.join(ROOT_DIR,"images/switches"),
}

async function getAllCategories(req,res){
    res.json(Object.keys(categoryFiles));
}

async function getProductsByCategory(req,res){
    const category=req.params.category?.toLowerCase();
    const filePath=categoryFiles[category];

    if(!filePath){
        return res.status(404).json({error: "Category not found"});
    }

    try{
        const products=await loadProductsFromCSV(category,filePath);
        res.json(products);
    }catch(error){
        console.error("Error loading category: ",error);
        res.status(500).json({error: "Failed to load products"});
    }
}

async function getProductImageByCategory(req,res){
    const category=req.params.category?.toLowerCase();
    const folderPath=imageFiles[category];

    if(!folderPath){
        return res.status(404).json({error: "Categpry not found"});
    }

    try{
        const files=await fs.promises.readdir(folderPath);
        const imageList=files.filter(file => 
            /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
        );
        return res.json({
            category,
            images: imageList
        }); 
    }catch(error){
        return res.status(500).json({
            error: "Server Error",
            details: error.message
        });
    }
}

async function getProductImage(req,res){
    const category=req.params.category?.toLowerCase();
    const imageName=req.params.image;
    const categoryDir=path.join(ROOT_DIR,"images",category);
    const fullPath=path.join(categoryDir,imageName);
    if(!fs.existsSync(fullPath)){
        return res.status(404).json({error: `Image not found for ${category}`});
    }
    return res.sendFile(fullPath);
}

module.exports={getProductsByCategory,getAllCategories,getProductImageByCategory,getProductImage};