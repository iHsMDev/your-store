"use server";

import { MostPopular } from "@/Data/Info";
import { connectToDB } from "@/utils/Database";
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

    const newPrice = (user.total += order.price);
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
    ).then(async () => {
      revalidatePath("/Cart", "layout");
      revalidatePath("/");
      let allprice = [];
      for (let i = 0; i < user.cart.length; i++) {
        const element = user.cart[i];
        for (let b = 0; b < element.count; b++) {
          allprice.push(MostPopular[element.index].price);
        }
      }
      await User.findOneAndUpdate(
        { email: email },
        { total: allprice.reduce((c, p) => c + p) }
      );
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
    if (user) {
      return user.cart;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const IncrementCount = async (email: string, index: number) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    const oldCart = user.cart;

    oldCart[index].count += 1;

    return await User.findOneAndUpdate(
      { email: email },
      { cart: oldCart }
    ).then(async (data) => {
      revalidatePath("/Cart");
      let allprice = [];
      for (let i = 0; i < user.cart.length; i++) {
        const element = user.cart[i];
        for (let b = 0; b < element.count; b++) {
          allprice.push(MostPopular[element.index].price);
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

export const DeleteItem = async (email: string, index: number) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    const oldCart = user.cart;

    let allprice = [];
    oldCart.splice(index, 1);
    for (let i = 0; i < user.cart.length; i++) {
      const element = user.cart[i];
      for (let b = 0; b < element.count; b++) {
        allprice.push(MostPopular[element.index].price);
      }
    }

    const newPrice =
      allprice.length >= 1 ? allprice.reduce((curr, prev) => curr + prev) : 0;
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
export const disIncrementCount = async (email: string, index: number) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: email });
    const oldCart = user.cart;
    let oldTotal = user.total;
    let allprice = [];

    if (oldCart[index].count <= 1) {
      let newPrice = user.total - MostPopular[oldCart[index].index].price;
      await User.findOneAndUpdate({ email: email }, { total: newPrice });
      oldCart.splice(index, 1);
      revalidatePath("/Cart");
    } else {
      oldCart[index].count -= 1;
      allprice = [];
      for (let i = 0; i < user.cart.length; i++) {
        const element = user.cart[i];
        for (let b = 0; b < element.count; b++) {
          allprice.push(MostPopular[element.index].price);
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
