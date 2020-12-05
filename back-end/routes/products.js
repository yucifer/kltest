import express from "express";
import ProductMessage from "../models/productMessage.js";
// import { getProducts, createProduct } from "../controllers/products.js";

const router = express.Router();

router.route("/").get((req, res) => {
  ProductMessage.find()
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

router.route("/").post((req, res) => {
  const { image, name, description, unitPrice, quantity } = req.body;
  const newProduct = new ProductMessage({
    image,
    name,
    description,
    unitPrice,
    quantity,
  });

  newProduct
    .save()
    .then(() => res.status(400).json(newProduct))
    .catch((err) => console.log("err ", err));
});

export default router;
