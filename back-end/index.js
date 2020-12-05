import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
const CONNECTION_URL =
  "mongodb+srv://yucifer:Yuci007@@cluster0.rym8s.mongodb.net/products?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("connection success");
// });
