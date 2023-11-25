import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({
  user: {
    type: String,
    required: [true, "User Is Required"],
  },
  productId: {
    type: String,
    required: [true, "ProductId is Required"],
  },
  text: {
    type: String,
    required: [true, "Text is Required"],
  },
  createdAt: {
    type: Date,
  },
});

const Review = models.Review || model("Review", ReviewSchema);

export default Review;
