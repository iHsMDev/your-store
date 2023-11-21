"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Cart.module.css";
const SideBar = ({
  image,
  name,
  email,
  total,
}: {
  image?: any;
  name?: any;
  email?: any;
  total?: number;
}) => {
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
    hover: {
      y: -5,
      filter: "brightness(86%)",
      cursor: "pointer",
      transition: {
        delay: 0.05,
      },
    },
    tap: {
      y: 0,
      scale: 0.5,
      filter: "brightness(86%)",

      transition: {
        delay: 0.05,
      },
    },
  };

  return (
    <section className={styles.sidebar}>
      <motion.header
        variants={ani}
        initial="hidden"
        animate="animate"
        custom={0}
        className={styles.header}
      >
        <Image
          src={image as string}
          alt=""
          sizes="100vw"
          width={60}
          height={60}
          className={styles.image}
        />
        <motion.h4
          variants={ani}
          initial="hidden"
          animate="animate"
          custom={1}
          className={styles.name}
        >
          {name}
        </motion.h4>
        <motion.p
          variants={ani}
          initial="hidden"
          animate="animate"
          custom={2}
          className={styles.email}
        >
          {email}
        </motion.p>
      </motion.header>
      <footer className={styles.footer}>
        <motion.p variants={ani} initial="hidden" animate="animate" custom={3}>
          المجموع {total}
        </motion.p>
        <motion.button
          variants={ani}
          initial="hidden"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          custom={4}
          className={styles.button}
        >
          تأكيد الدفع
        </motion.button>
      </footer>
    </section>
  );
};

export default SideBar;
