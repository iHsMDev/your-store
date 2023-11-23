import { Schema, model, models } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    unique: [true, "Name Is Taken"],
    required: [true, "Name is Required"],
  },
  category_name: {
    type: String,
    unique: [true, "Name Is Taken"],
    required: [true, "Name is Required"],
  },
});

const Category = models.Categorie || model("Categorie", schema);

export default Category;
