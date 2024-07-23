require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

try {
     mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose is connected successful");
  } catch (e) {
    // connection faield
    console.log("could not connect");
  }
app.get('/',(req,res)=> {
    res.send('Hi From Express');
})
  app.listen(process.env.PORT,()=>{
    console.log('app listing on port 3000');
})
