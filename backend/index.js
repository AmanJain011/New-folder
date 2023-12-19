const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1/auth", require("./routes/authRoutes"));

mongoose.connect("mongodb://0.0.0.0:27017")
.then(()=>{
    console.log(`\n☘️  MongoDB Connected! \n`)
}).catch((error)=>{
    console.log("MongoDB connection error: ", error)
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log( `Node Server Running on Port ${port}`)
})