const express =require('express')
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const message = require("./routes/message");
try {
    mongoose.connect('mongodb+srv://chandra:chandra@cluster0.wpffovp.mongodb.net/?retryWrites=true&w=majority',  () =>
    console.log("connected"));    
    }
catch (error) { 
    console.log("could not connect");    
    }

app.get("/messages/", message.message_all);
app.post("/create_post",message.message_create);
    
app.listen(4000,()=>{
console.log("server running at 4000")
})