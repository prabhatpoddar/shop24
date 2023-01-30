const router = require("express").Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

const {
  
  verifyEmployeeAndAutherization,
} = require("./../middleware/Authenticate");
const ProductModel = require("./../models/product.model");

router.get("/", async (req, res) => {
  const limit = req.query.limit;

  try {
    const product = await ProductModel.find().limit(limit);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);

  }
});

router.put("/:id", verifyEmployeeAndAutherization, async (req, res) => {
 
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete/:id", verifyEmployeeAndAutherization, async (req, res) => {
  try {
    const deleteUser = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
