"use client";
import { MostPopular } from "@/Data/Info";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Actions from "./Actions";
import styles from "./Cart.module.css";

const Item = ({
  index,
  count,
  indexOfCart,
}: {
  index: number;
  count: number;
  indexOfCart: number;
}) => {
  const user = useSession();
  const data = MostPopular[index];

  const cards = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    },
  };
  return (
    <motion.div
      variants={cards}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={styles.item}
    >
      <div>
        <Image className={styles.itemImage} src={data.img} alt="" />
      </div>
      <div className={styles.data}>
        <p className={styles.itemName}>{data.name}</p>
        <p className={styles.itemPrice}>{data.price * count}</p>
        <p className={styles.itemCount}>{count}</p>
      </div>
      <Actions email={user.data?.user?.email as string} index={indexOfCart} />
    </motion.div>
  );
};

export default Item;
