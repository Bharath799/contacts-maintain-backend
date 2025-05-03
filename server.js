//Create basic express server npm install express
//Install dontenv
//install thunder client

const express = require("express");
const env = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log("server started on :",port); 
})