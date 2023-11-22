"use client";
import { average } from "color.js";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./Profile.module.css";
const Profile = ({ user }: { user: any }) => {

  const newImage = user?.image?.replaceAll("s96-c", "s192-c");
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
  };
  return (
    <>
      <header className={styles.header} style={{}}>
        <motion.div
          variants={animation}
          initial="hidden"
          animate="show"
          custom={0}
          className={styles.banner}
        >
          <motion.div
            variants={animation}
            initial="hidden"
            animate="show"
            className={styles.avatar}
            custom={1}
          >
            <Image
              className={styles.img}
              src={newImage as string}
              alt="ff"
              width={100}
              height={100}
              id="image"
            />
          </motion.div>
        </motion.div>

        <div className={styles.name}>
          <motion.p
            variants={animation}
            initial="hidden"
            animate="show"
            custom={2}
          >
            {user?.name}
          </motion.p>
        </div>
      </header>
    </>
  );
};

export default Profile;
