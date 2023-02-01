const mongoose =require("mongoose");
require("dotenv").config()

const connect=mongoose.connect("mongodb+srv://prabhat:myntra@cluster0.w7xdnux.mongodb.net/myntra?retryWrites=true&w=majority")

module.exports=connect