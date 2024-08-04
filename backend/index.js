require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// create upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    message: 'Uploaded successful',
    image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`,
  });
});

// schema for creation products
const productSchema =  new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Add the auto-increment plugin to the schema
productSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Product = mongoose.model('Product', productSchema);

app.post('/addProduct',async (req,res) => {

  let products = await Product.find({})
  let id;
  if(products.length > 0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }else{
    id = 1;
  }
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

  res.json({
    success:true,
    message: 'Added successful',
    name:req.body.name
  })

})

// delete product
app.post('/removeProduct', async(req,res) => {

  await Product.findOneAndDelete({ id: req.body.id });
  // console.log('removed successful');

  res.json({
    success: true,
    message: 'Deleted successful',
    name: req.body.name,
  });
})

// get allproducts
app.get('/allProducts', async (req,res) => {
  let products = await Product.find({});
  // console.log('allproducts fetching');
  res.send(products);

})

// users
// user schema
const User = mongoose.model('User',{
  
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    carData: {
      type: Object,
    },
    date: {
      type: Date,
      default: Date.now
    },
})

// signup endpoint
app.post('/signup' , async(req,res) => {
  let check = await User.findOne({email: req.body.email});
  if (check){
    return res.status(400).json({
      success:false,
      message:'Existing user found with same email address',
    })
  }
  let cart = {}; 
  for(let i = 0; i < 300; i++){
    cart[i] = 0;
  }
  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    carData: cart,
  })
  await user.save();

  const data = {
    user: {
      id: user.id
    }
  }
  const token = jwt.sign(data, 'secret_ecom');
  res.json({
    success:true,
    message:'Signup successful',
    token
  })
})

// login
app.post('/login', async(req,res) => {
  let user = await User.findOne({email: req.body.email});
  if(user){
    const passMatch = req.body.password === user.password;

    if(passMatch){
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom');
      res.json({
        success: true,
        message: 'Login successful',
        token
      })
    }else {
      res.json({
        success: false,
        message: 'Password is wrong ):'
      })
    }
  }else {
    res.json({
      success:false,
      message: 'User not found with this email'
    })
  }
})

app.get('/newCollections',async (req,res) => {
  let products= await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  console.log('newCollections fetched');
  res.send(newCollection);
})
app.listen(process.env.PORT, () => {
  console.log("app listing on port 3000");
});
