"use client";

import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import styles from "./Navbar.module.css";
const SignIn = ({ name, image }: { name: string; image: string }) => {
  const newImage = image.replaceAll("s96-c", "s192-c");

  const animation = {
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
    <div className={styles.account}>
      <motion.div
        variants={animation}
        initial="hidden"
        animate="animate"
        custom={1}
      >
        <Image
          className={styles.avatar}
          src={newImage}
          alt="Avatar"
          width={50}
          height={50}
          sizes="100vw"
        />
      </motion.div>
      <div className={styles.name}>
        <motion.p
          variants={animation}
          initial="hidden"
          animate="animate"
          custom={5}
        >
          {name}
        </motion.p>

        <motion.p
          variants={animation}
          initial="hidden"
          animate="animate"
          custom={7}
          className={styles.SignOutButton}
          onClick={() => signOut()}
        >
          تسجيل خروج
        </motion.p>
      </div>
    </div>
  );
};

export default SignIn;
