"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Reviews.module.css";
const Review = ({
  image,
  name,
  index,
  text,
}: {
  image: string;
  name: string;
  index: number;
  text: string;
}) => {
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    },
    inView: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05,
      },
    },
  };
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate={index < 5 ? "show" : ""}
      whileInView={index < 5 ? "" : "inView"}
      viewport={{
        once: true,
      }}
      className={styles.review}
    >
      <header className={styles.reivewHeader}>
        <Image
          className={styles.img}
          src={image as string}
          alt="."
          height={100}
          width={100}
        />
        <div className={styles.data}>
          <p>{name}</p>
          <p className={styles.comment}>{text}</p>
        </div>
      </header>
      <button className={styles.button}>رؤية المنتج</button>
    </motion.div>
  );
};

export default Review;
