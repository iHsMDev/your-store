"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Empty from "public/Empty.svg";
import { useEffect } from "react";
import styles from "./Cart.module.css";
import Item from "./Item";
const CartItems = ({ Items }: { Items: any }) => {
  const ani = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  useEffect(() => {
    console.log(Items);
  }, [Items]);
  return (
    <div className={styles.items}>
      {Items.length != 0 && (
        <motion.header
          variants={ani}
          initial="hidden"
          animate="animate"
          custom={0}
          className={styles.dataHeader}
        >
          <h4 className={styles.storeName}>صورة المنتج</h4>
          <div className={styles.dataAll}>
            <motion.p
              variants={ani}
              initial="hidden"
              animate="animate"
              custom={1}
            >
              اسم المنتج
            </motion.p>
            <motion.p
              variants={ani}
              initial="hidden"
              animate="animate"
              custom={2}
            >
              سعر المنتج
            </motion.p>
            <motion.p
              variants={ani}
              initial="hidden"
              animate="animate"
              custom={3}
            >
              الكمية
            </motion.p>
          </div>
        </motion.header>
      )}

      {Items.length >= 1 ? (
        Items.map((item: { _id: string; count: number }, index: number) => (
          <Item
            key={index}
            indexOfCart={index}
            index={index}
            id={item._id}
            count={item.count}
          />
        ))
      ) : (
        <motion.section
          variants={ani}
          initial="hidden"
          animate="animate"
          custom={4}
          className={styles.empty}
        >
          <Image className={styles.emptyImage} src={Empty} alt="" />
          <motion.p
            variants={ani}
            initial="hidden"
            animate="animate"
            custom={5}
          >
            لا توجد منتجات في السلة
          </motion.p>
        </motion.section>
      )}
    </div>
  );
};

export default CartItems;
