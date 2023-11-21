"use client";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
const Header = ({ text }: { text: string }) => {
  const h4 = {
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
  return (
    <header className={styles.header}>
      <motion.h4
        variants={h4}
        initial="hidden"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className={styles.text}
      >
        {text}
      </motion.h4>
      {/* <hr className={styles.line} /> */}
    </header>
  );
};

export default Header;
