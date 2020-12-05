import mongoose from "mongoose";

// new
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    order: [
      {
        name: { type: String, required: true },
        unitPrice: { type: Number, required: true },
        totalQuantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
