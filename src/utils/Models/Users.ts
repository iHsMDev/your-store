import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  email: {
    type: String,
    unique: [true, "Email Already exists!"],
    required: [true, "Email Is Required"],
  },
  image: {
    type: String,
  },
  Cart: {
    type: Array,
    default: [],
  },
});

const User = models.User || model("User", userSchema);

export default User;
