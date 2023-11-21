"use server";

import { MostPopular } from "@/Data/Info";
import { connectToDB } from "@/utils/Database";
import User from "@/utils/Models/Users";
const descDefault = {
  name: "",
  img: "",
  price: "",
};
export const AddToCart = async (index: number, email: string, carts?: []) => {
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
    const oldCart: [{ index: number; count: number }] = user.cart;
    const order = MostPopular[index];

    if (oldCart.find((data) => data.index === index)) {
      return {
        message: "المنتج متواجد في السلة بالفعل",
        desc: descDefault,
        ok: false,
      };
    }
    oldCart.push({ index: index, count: 1 });

    return await User.findOneAndUpdate(
      { email: email },
      { cart: oldCart }
    ).then(() => {
      return {
        message: "تم اضافة المنتج بنجاح",
        desc: { ...order },
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
