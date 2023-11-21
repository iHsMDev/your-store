import { getItemsFromCart, getTotal } from "@/Server/Actions";
import { AuthConfig } from "@/lib/Auth";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import styles from "./Cart.module.css";
import CartItems from "./CartItems";
import SideBar from "./SideBar";

const Cart = async () => {
  const session = await getServerSession(AuthConfig);
  const items = await getItemsFromCart(session?.user?.email as string);
  const total = await getTotal(session?.user?.email as string);
  return (
    <div className={styles.cartContainer}>
      <SideBar {...session?.user} total={total} />

      <Suspense fallback={<h1>Loading..</h1>}>
        <CartItems Items={items ? items : []} />
      </Suspense>
    </div>
  );
};

export default Cart;
