const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//   //กรอกทุก ชื่อ params และ type

//   product: {
//     prod_name: String,
//     prod_desc: String,
//     prod_price: Number,
//   },
//   place: {
//     place_name: String,
//     place_desc: String,
//     place_price: Number,
//   },

//   //EX.prod_name คือชื่อ product

//   updated_at: { type: Date, default: Date.now },
// });

// Define the product schema
const productSchema = new mongoose.Schema({
  prod_name: { type: String, required: true },
  prod_desc: { type: String, required: true },
  prod_price: { type: Number, required: true },
});

// Define the place schema
const placeSchema = new mongoose.Schema({
  place_name: { type: String, required: true },
  place_desc: { type: String, required: true },
  place_price: { type: Number, required: true },
});

// Define the main schema for the JSON data
const dataSchema = new mongoose.Schema({
  products: [productSchema],
  places: [placeSchema],
});

// Create the model using the data schema
const Data = mongoose.model("Data", dataSchema);

module.exports = Data;

//ชื่อตาราง product
//module.exports = mongoose.model("Product", ProductSchema);

/*
ตอนสร้างให้สร้าง database เดียวที่มี params ครอบคลุมทุกข้อมูล กำหนด params type ไว้
ตอนใช้อันไหนให้ find ตาม type มาสร้างเป็น list เก็บไว้ทีหลัง 
ex. อยากได้ list producyt ที่มีสีขาวเท่านั้น
ตรง Product.find ใส่ { prod_color: 'white' }

router.get('/', (req, res, next) => {
    Product.find({ prod_color: 'white' }, (err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});
*/
