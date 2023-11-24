"use server";

import { connectToDB } from "@/utils/Database";
import Category from "@/utils/Models/Category";
import Product from "@/utils/Models/Product";
import User from "@/utils/Models/Users";
import { revalidatePath } from "next/cache";
const descDefault = {
  name: "",
  img: "",
  price: "",
};

export const getCartLength = async (email: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    if (!user) {
      return 0;
    }
    return user.cart.length;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const AddToCart = async (index: string, email: string, carts?: []) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    if (!user) {
      return {
        message: "يجب عليك تسجيل الدخول",
        ok: false,
        desc: descDefault,
      };
    }
    const oldCart: [{ _id: string; count: number }] = user.cart;
    const order = await Product.findById(index);

    if (oldCart.find((data) => data._id === index)) {
      return {
        message: "المنتج متواجد في السلة بالفعل",
        desc: descDefault,
        ok: false,
      };
    }
    oldCart.push({ _id: index, count: 1 });

    return await User.findOneAndUpdate(
      { email: email },
      { cart: oldCart }
    ).then(async () => {
      revalidatePath("/Cart", "layout");
      revalidatePath("/");

      await User.findOneAndUpdate(
        { email: email },
        { total: (user.total += order.price) }
      );
      return {
        message: "تم اضافة المنتج بنجاح",
        desc: order,
        ok: true,
      };
    });
  } catch (error: any) {
    return {
      message: error.message,
      ok: false,
      desc: descDefault,
    };
  }
};

type ProductData = {
  name: string;
  _id: string;
  img: string;
  description: string;
  purchases: string;
  price: number;
};
export const getProducts = async () => {
  try {
    await connectToDB();
    let data = await Product.find();
    let cards: ProductData[] = [];

    data.forEach((d, i) => {
      cards.push({
        name: d.name,
        _id: `${d._id}`,
        img: d.img,
        description: d.description,
        purchases: d.purchases,
        price: d.price,
      });
    });

    return cards;
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const getProduct = async (_id: string) => {
  try {
    await connectToDB();
    let d = await Product.findById(_id);
    let cards: ProductData;

    cards = {
      name: d.name,
      _id: `${d._id}`,
      img: d.img,
      description: d.description,
      purchases: d.purchases,
      price: d.price,
    };

    return cards;
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const getTotal = async (email: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    if (!user) {
      return 0;
    }
    return user.total;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getItemsFromCart = async (email: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    return user.cart;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const IncrementCount = async (email: string, id: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    const oldCart = user.cart;
    const item = await Product.findById(id);
    const index = oldCart.findIndex((item: { _id: string }) => item._id === id);
    oldCart[index].count += 1;

    return await User.findOneAndUpdate(
      { email: email },
      { cart: oldCart }
    ).then(async (data) => {
      revalidatePath("/Cart");
      let allprice = [];
      for (let i = 0; i < user.cart.length; i++) {
        const element = user.cart[i];
        const newItem = await Product.findById(element._id);
        for (let b = 0; b < element.count; b++) {
          allprice.push(newItem.price);
        }
      }
      await User.findOneAndUpdate(
        { email: email },
        { total: allprice.reduce((c, p) => c + p) }
      );
      return {
        message: "Nice",
      };
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const DeleteItem = async (email: string, id: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    const oldCart = user.cart;
    const item = await Product.findById(id);
    const index = oldCart.findIndex((item: { _id: string }) => item._id === id);
    const newItem = oldCart.find((item: { _id: string }) => item._id === id);
    let allprice = [];

    for (let b = 0; b < newItem.count; b++) {
      allprice.push(item.price);
    }

    oldCart.splice(index, 1);

    const newPrice =
      allprice.length != 0
        ? (user.total -= allprice.reduce((prev, curr) => prev + curr))
        : 0;
    return await User.findOneAndUpdate(
      { email: email },
      { cart: oldCart, total: newPrice }
    ).then((data) => {
      revalidatePath("/Cart");

      return {
        message: "Nice",
      };
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const disIncrementCount = async (email: string, id: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });

    const oldCart = user.cart;
    const item = await Product.findById(id);
    const index = oldCart.findIndex((item: { _id: string }) => item._id === id);
    let oldTotal = user.total;
    let allprice = [];

    if (oldCart[index].count <= 1) {
      let newPrice = user.total - item.price;
      await User.findOneAndUpdate({ email: email }, { total: newPrice });
      oldCart.splice(index, 1);
      revalidatePath("/Cart");
    } else {
      oldCart[index].count -= 1;
      allprice = [];
      for (let i = 0; i < user.cart.length; i++) {
        const element = user.cart[i];
        for (let b = 0; b < element.count; b++) {
          const prod = await Product.findById(element._id);

          allprice.push(prod.price);
        }
      }

      await User.findOneAndUpdate(
        { email: email },
        {
          total:
            allprice.length >= 1
              ? allprice.reduce((curr, prev) => curr + prev)
              : 0,
        }
      );
      revalidatePath("/Cart");
    }

    return await User.findOneAndUpdate(
      { email: email },
      { cart: oldCart }
    ).then((data) => {
      revalidatePath("/Cart");

      return {
        message: "Nice",
      };
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getProfile = async (name: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: name }).select("-_id ");

    return (
      {
        message: true,
        user: {
          name: user.name,
          email: user.email,
          image: user.image,
        },
      } || {
        message: false,
      }
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCategories = async () => {
  try {
    await connectToDB();
    return await Category.find();
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const getProductsLengthOfCategory = async (name: string) => {
  try {
    await connectToDB();
    return (await Product.find({ category: name })).length;
  } catch (error: any) {
    throw Error(error.message);
  }
};
