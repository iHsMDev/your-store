"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Categories.module.css";
const Category = ({
  name,
  href,
  icon,
  count,
  index,
}: {
  name: string;
  href: string;
  icon: any;
  count: number;
  index: number;
}) => {
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
      <div className={styles.icon}>{icon()}</div>
      <footer className={styles.footer}>
        <div className={styles.buttons}>
          <Link href={href}>
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
            {count} عدد المنتجات
          </motion.p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Category;
