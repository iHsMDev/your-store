"use client";
import { StoreName } from "@/Data/Info";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "public/Logo.png";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./Footer.module.css";
const Footer = () => {
  const [top, setTop] = useState(0);
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.25,
      },
    },
    hover: {
      filter: "brightness(80%)",
      cursor: "pointer",

      y: -5,
    },
    hover2: {
      filter: "brightness(80%)",
      cursor: "pointer",
    },
  };
  const goToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.onscroll = () => {
      setTop(document.documentElement.scrollTop);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.name}
        variants={animation}
        whileHover="hover2"
      >
        <Image className={styles.logo} src={Logo} alt="شعار المتجر" />{" "}
        {StoreName}
      </motion.div>
      <motion.div
        variants={animation}
        whileHover="hover"
        initial="hidden"
        whileInView={top == 0 ? "" : "animate"}
        onClick={() => goToTop()}
        className={styles.topButton}
      >
        <IoIosArrowUp />
      </motion.div>
    </footer>
  );
};

export default Footer;
