const router = require("express").Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

const {
  verifyEmployeeAndAutherization,
} = require("./../middleware/Authenticate");
const Product = require("./../models/product.model");


router.get("/search", async (req, res) => {
  const { search } = req.query;
  const all_searchData = await Product.find({
    productname: { $regex: search, $options: "i" },
  }).limit(5);
  const length = await Product.find({
    productname: { $regex: search, $options: "i" },
  }).count();

  return res.status(200).send({
    length,
    data: all_searchData,
  });
});

router.get("/", async (req, res) => {
  const { category, q, limit, brand, page, sort, min, max } = req.query;
  try {
    let temp = new RegExp(q, "i");
    if (category && limit && page) {
      if (sort) {
        if (min) {
          let length = await Product.find({
            $and: [{ category: category }, { price: min }],
          }).count();
          let data = await Product.find({
            $and: [{ category: category }, { price: min }],
          })
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ price: sort === "asc" ? 1 : -1 });
          res.status(200).json({
            length,
            data,
          });
        } else if (max) {
          let length = await Product.find({
            category: category,
            price: max,
          }).count();
          let data = await Product.find({ category: category, price: max })
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ price: sort === "asc" ? 1 : -1 });
          console.log(sort === "asc" ? 1 : -1);
          res.status(200).json({
            length,
            data,
          });
        } else {
          let length = await Product.find({ category: category }).count();
          let data = await Product.find({ category: category })
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ price: sort === "asc" ? 1 : -1 });
          console.log(sort === "asc" ? 1 : -1);
          res.status(200).json({
            length,
            data,
          });
        }
      } else {
        let length = await Product.find({ category: category }).count();
        let data = await Product.find({ category: category })
          .skip((page - 1) * limit)
          .limit(limit);
        res.status(200).json({
          length,
          data,
        });
      }
    } else if (category) {
      if (sort) {
        let length = await Product.find({ category: category }).count();
        let data = await Product.find({ category: category }).sort({
          price: sort === "asc" ? 1 : -1,
        });
        res.status(200).json({
          length,
          data,
        });
      } else {
        let length = await Product.find({ category: category }).count();
        let data = await Product.find({ category: category });
        res.status(200).json({
          length,
          data,
        });
      }
    } else if (brand && limit && page) {
      if (sort) {
        let length = await Product.find({ brand: brand }).count();
        let data = await Product.find({ brand: brand })
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ price: sort === "asc" ? 1 : -1 });
        res.status(200).json({
          length,
          data,
        });
      } else {
        let length = await Product.find({ brand: brand }).count();
        let data = await Product.find({ brand: brand })
          .skip((page - 1) * limit)
          .limit(limit);
        res.status(200).json({
          length,
          data,
        });
      }
    } else if (brand) {
      if (sort) {
        let length = await Product.find({ brand: brand }).count();
        let data = await Product.find({ brand: brand }).sort({
          price: sort === "asc" ? 1 : -1,
        });
        res.status(200).json({
          length,
          data,
        });
      } else {
        let length = await Product.find({ brand: brand }).count();
        let data = await Product.find({ brand: brand });
        res.status(200).json({
          length,
          data,
        });
      }
    } else if (page && limit) {
      let length = await Product.find().count();
      let data = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.status(200).json({
        length,
        data,
      });
    } else if (sort) {
      let length = await Product.find()
        .sort({ price: sort === "asc" ? 1 : -1 })
        .count();
      let data = await Product.find().sort({ price: sort === "asc" ? 1 : -1 });
      res.status(200).json({
        length,
        data,
      });
    } else {
      let data = await Product.find();
      let length = await Product.find().count();
      res.status(200).json({
        length,
        data,
      });
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let prod = await Product.findById({ _id: id });
    res.send(prod);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", verifyEmployeeAndAutherization, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete(
  "/delete/:id",
  verifyEmployeeAndAutherization,
  async (req, res) => {
    try {
      const deleteUser = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

module.exports = router;
