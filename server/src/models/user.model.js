const mongoose=require("mongoose");

const userSechma=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})

module.exports=mongoose.model("user",userSechma)