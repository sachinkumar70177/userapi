const mongoose=require("mongoose")
require('dotenv').config()
const connection=mongoose.connect(process.env.MONGO_URL)

const userSchema=mongoose.Schema({
    name: String,
    age: Number,
    city: String,
},{
 versionKey:false
})

const productSchema=mongoose.Schema({
    product: String,
    quantity: Number,
    brand: String,
},{
 versionKey:false
})
const UserModel=mongoose.model("user",userSchema)
const ProductMode=mongoose.model("product",productSchema)

module.exports={
    connection,
    UserModel,
    ProductMode
}