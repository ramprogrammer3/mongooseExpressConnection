const express = require('express')
const app = express()
const port = 8080;
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Akanksha:Maniyari@cluster0.0muw2.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("DB connection failed")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})