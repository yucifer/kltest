import mongoose from "mongoose";

// new
const Schema = mongoose.Schema;

const productMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductMessage = mongoose.model("ProductMessage", productMessageSchema);

export default ProductMessage;
