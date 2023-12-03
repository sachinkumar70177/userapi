const { ProductMode } = require("../db")
const express=require("express")

const productRouter=express.Router()

productRouter.post("/add",async(req,res)=>{
    const product=new ProductMode(req.body)
    await product.save()
    res.status(200).send(product)
})

productRouter.get("/",async (req,res)=>{
    const products=await ProductMode.find()
    res.status(200).send(products)
})


module.exports={
    productRouter
}