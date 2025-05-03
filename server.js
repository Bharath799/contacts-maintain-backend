//Create basic express server npm install express
//Install dontenv
//install thunder client
//to handle proper routes use Routes folder structure
//app.use() is a middle ware

const express = require("express");
const env = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// app.get('/api/contacts',(req,res) => {
//     res.send({message:"Get Contacts"})
// })
//middle ware
app.use("/app/contacts",require("./routes/contactRoutes"));

app.listen(port,() =>{
    console.log("server started on :",port); 
})