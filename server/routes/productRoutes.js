const express=require("express");
const {getAllCategories,getProductsByCategory,getProductImageByCategory,getProductImage}=require("../controllers/productController");

const router=express.Router();

router.get("/categories",getAllCategories);
router.get("/images/:category",getProductImageByCategory);
router.get("/images/:category/:image",getProductImage);
router.get("/:category",getProductsByCategory);

module.exports=router;