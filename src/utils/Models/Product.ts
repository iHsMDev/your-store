import { Schema, model, models } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    unique: [true, "Name Is Taken"],
    required: [true, "Name is Required"],
  },
  price: {
    type: Number,
    required:true
  },
  img: {
    type: String,
    required:true
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  purchases: {
    type: Number,
    default: 0,
  },
});

const Product = models.Product || model("Product", schema);

export default Product;
