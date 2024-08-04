const express = require("express");
const mongoose = require("mongoose");
const studentRoute=require("./controller/studentRoute")
const bodyParser = require("body-parser");
const cors = require("cors")


const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://krishna:krishnakanth@cluster0.q1patlv.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))


app.use("/studentRoute",studentRoute);


app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})
