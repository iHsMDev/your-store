"use client";
import { getProductsLengthOfCategory } from "@/Server/Actions";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
const Category = ({
  name,
  category_name,
  index,
}: {
  name: string;
  category_name: string;
  index: number;
}) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const api = async () => {
      const length = await getProductsLengthOfCategory(category_name);
      setSize(length);
    };
    api();
  }, [category_name]);
  const cardsAnimation = {
    hidden: {
      y: 25,
      scale: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      scale: 1,

      opacity: 1,
      transition: {
        delay: 0.15 * index,
      },
    },
  };
  const dataAniamtion = {
    hidden: {
      y: 25,
      scale: 0,
      opacity: 0,
    },
    animate: (ind: number) => ({
      y: 0,
      scale: 1,

      opacity: 1,
      transition: {
        delay: 0.05 * ind,
      },
    }),
    hoverd: {
      y: -5,
      filter: "brightness(80%)",
      transition: {
        delay: 0.05,
      },
    },
  };
  return (
    <motion.div
      variants={cardsAnimation}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={styles.category}
    >
      <div className={styles.icon}>
        <Image
          src={`/categories/${category_name}.jpg`}
          height={600}
          width={500}
          className={styles.img}
          alt=""
        />
      </div>
      <footer className={styles.footer}>
        <div className={styles.buttons}>
          <Link href={`/category/${category_name}`}>
            <motion.button
              variants={dataAniamtion}
              initial="hidden"
              whileInView="animate"
              whileHover="hoverd"
              custom={5}
              className={styles.button}
            >
              رؤية منتجات القسم
            </motion.button>
          </Link>
        </div>
        <div className={styles.data}>
          <motion.p
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={6}
            className={styles.name}
          >
            {name}
          </motion.p>
          <motion.p
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={7}
            className={styles.size}
          >
            {size} عدد المنتجات
          </motion.p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Category;
