import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  username: {
    type: String,
    required: [true, "Username is Required"],
  },
  email: {
    type: String,
    unique: [true, "Email Already exists!"],
    required: [true, "Email Is Required"],
  },
  image: {
    type: String,
  },
  cart: {
    type: Array,
    default: [],
  },
  total: {
    type: Number,
    default: 0,
  },
  platform: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
