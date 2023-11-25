"use client";
import { getProduct } from "@/Server/Actions";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Actions from "./Actions";
import styles from "./Cart.module.css";

type ItemData = {
  _id: string;
  name: string;
  img: string;
  price: number;
};
const Item = ({
  index,
  count,
  indexOfCart,
  id,
}: {
  index: number;
  count: number;
  indexOfCart: number;
  id: string;
}) => {
  const user = useSession();
  const [data, setData] = useState<ItemData>();
  useEffect(() => {
    const api = async () => {
      const data = await getProduct(id);
      setData(data);
    };
    api();
  }, [id]);

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
      <div className={styles.imgContainer}>
        <Image
          className={styles.itemImage}
          src={data?.img as string}
          alt=""
          sizes="100vw"
          height={500}
          width={500}
        />
      </div>
      <div className={styles.data}>
        <p className={styles.itemName}>{data?.name}</p>
        <p className={styles.itemPrice}>
          {data && Math.floor(data?.price * count)} ريال
        </p>
      </div>
      <Actions
        email={user.data?.user?.email as string}
        id={data?._id as string}
        count={count}
      />
    </motion.div>
  );
};

export default Item;
