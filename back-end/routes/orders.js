import express from "express";
import Order from "../models/orders.js";
// import { getProducts, createProduct } from "../controllers/products.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.send(orders))
    .catch((err) => console.log(err));
});

router.route("/").post((req, res) => {
  console.log(req.body);
  const { order, totalPrice } = req.body;

  const newOrder = new Order({
    order,
    totalPrice,
  });

  newOrder
    .save()
    .then(() => res.status(400).json(newOrder))
    .catch((err) => console.log("err ", err));
});

export default router;
