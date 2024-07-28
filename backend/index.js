require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Mongoose is connected successful");
} catch (e) {
  // connection faield
  console.log("could not connect");
}
app.get("/", (req, res) => {
  res.send("Hi From Express");
});

// image stoarge engin

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// create upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`,
  });
});

// schema for creation products
// const Product = mongoose.model("Product", {
//   id: {
//     type: Number,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   new_price: {
//     type: Number,
//     required: true,
//   },
//   old_peice: {
//     type: Number,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now(),
//   },
//   available: {
//     type: Boolean,
//     default: true,
//   },
// });

app.post('/addProduct',async (req,res) => {

  const product = new Product({
  
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,

  });
  console.log(product);
  await product.save();
  console.log('saced');

  res.json({
    success:true,
    name:req.body.name
  })

})

app.listen(process.env.PORT, () => {
  console.log("app listing on port 3000");
});
