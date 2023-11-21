"use client";

import { getCartLength } from "@/Server/Actions";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
const SideBar = ({ email }: { email: string }) => {
  const [length, setLength] = useState(0);
  useEffect(() => {
    const Length = async () => {
      setLength(await getCartLength(email));
    };
    Length();
  }, [email]);
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    show: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    }),
    hover: {
      filter: "brightness(80%)",
      transition: {
        delay: 0.05,
      },
    },
    tap: {
      y: 0,
      scale: 0.8,
      filter: "brightness(86%)",
      transition: {
        delay: 0.05,
      },
    },
  };
  return (
    <motion.section
      variants={animation}
      initial="hidden"
      animate="show"
      custom={0}
      className={styles.sidebar}
    >
      <footer className={styles.footer}>
        <div className={styles.text}>
          <motion.p
            variants={animation}
            initial="hidden"
            animate="show"
            custom={2}
          >
            سلة المشتريات
          </motion.p>
          <motion.span
            variants={animation}
            initial="hidden"
            animate="show"
            custom={3}
            className={styles.badge}
          >
            {length}
          </motion.span>
        </div>
        <motion.span variants={animation} whileTap="tap">
          <Link href="/Cart">
            <motion.button
              variants={animation}
              initial="hidden"
              animate="show"
              whileHover="hover"
              custom={4}
              className={styles.button}
            >
              زيارة سلة المشتريات
            </motion.button>
          </Link>
        </motion.span>
      </footer>
    </motion.section>
  );
};

export default SideBar;
