const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/ProductModel");

// router.get("/", (req, res, next) => {
//   Product.find((err, products) => {
//     if (err) return next(err);
//     res.json(products);
//   });
// });

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Product.create(req.body);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// router.get("/:id", (req, res, next) => {
//   Product.findById(req.params.id, (err, post) => {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.post("/", (req, res, next) => {
//   Product.create(req.body, (err, post) => {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.put("/:id", (req, res, next) => {
//   Product.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.delete("/:id", (req, res, next) => {
//   Product.findByIdAndDelete(req.params.id, (err, post) => {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
