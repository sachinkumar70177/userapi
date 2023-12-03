const express=require("express")
const { UserModel } = require("../db")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
const {city}=req.body
    try {
        const hashedcity= bcrypt.hash(city,5)
        const user=new UserModel({...req.body,city:hashedcity})
    await user.save()
    res.status(200).send(user)
    } catch (error) {
        
    }
    
})

userRouter.get("/",async (req,res)=>{
    const users=await UserModel.find(req.query)
    res.status(200).send(users)
})
userRouter.patch("/update/:userID", async(req,res)=>{
    const {userID}=req.params;
    try {
        await UserModel.findByIdAndUpdate({_id:userID},req.body)
        res.status(200).send({msg:"update the users"})
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports={
    userRouter
}