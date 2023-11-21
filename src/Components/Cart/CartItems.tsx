"use client";
import { motion } from "framer-motion";
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
  return (
    <div className={styles.items}>
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
      {Items.length >= 1 ? (
        Items.map((item: { index: number; count: number }, index: number) => (
          <Item
            key={index}
            indexOfCart={index}
            index={item.index}
            count={item.count}
          />
        ))
      ) : (
        <motion.p variants={ani} initial="hidden" animate="animate" custom={5}>
          لا يوجد منتجات في السلة
        </motion.p>
      )}
    </div>
  );
};

export default CartItems;
