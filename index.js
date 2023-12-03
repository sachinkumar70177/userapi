const express=require("express")
const mongoose=require("mongoose")
const { connection } = require("./db")
const { userRouter } = require("./Routes/userroutes")
const { productRouter } = require("./Routes/productroutes")
require('dotenv').config()
const app=express()

app.use(express.json())

app.use("/user",userRouter)
app.use("/product",productRouter)
app.get("/",(req,res)=>{
    res.send({msg:"hey "})
})


app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("db is connected")
        console.log("connected to serer")
    } catch (error) {
        console.log(error)
    }
    
})