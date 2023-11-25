"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./BackButton.module.css";
const BackButton = ({ href }: { href?: string }) => {
  return (
    <Link href={href || "."}>
      <motion.button className={styles.button}>الرجوع للخلف</motion.button>
    </Link>
  );
};

export default BackButton;
