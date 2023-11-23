"use client";

import { getProducts } from "@/Server/Actions";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Most.module.css";
type productInfo = {
  name: string;
  _id: string;
  img: string;
  description: string;
  purchases: string;
  price: number;
};
const Most = () => {
  const [products, setProducts] = useState<productInfo[]>([]);
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05,
      },
    },
  };
  useEffect(() => {
    const productsFetch = async () => {
      const prodc = await getProducts();

      setProducts(prodc);
    };
    productsFetch();
  }, []);
  return (
    <section className={styles.container}>
      <motion.header
        variants={animation}
        initial="hidden"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className={styles.header}
      >
        المنتجات الأكثر مبيعآ
      </motion.header>

      <div className={styles.cards}>
        {products.map((most, index) => (
          <Card
            key={index}
            _id={`${most._id}`}
            name={most.name}
            index={index}
            img={most.img}
            price={most.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Most;
