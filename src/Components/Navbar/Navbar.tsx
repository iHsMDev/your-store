"use client";

import { Links, StoreName } from "@/Data/Info";
import { ScrollToElement } from "@/Functions/ScrollToElement";
import { LinksTypes } from "@/Types/Types";
import classNames from "classnames";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Menu } from "../Provider/DropDownProvider";
import AccountSection from "./AccountSection";
import DropDown from "./DropDown";
import styles from "./Navbar.module.css";
const Navbar = ({ length }: { length: number }) => {
  const pathname = usePathname();
  const context = useContext(Menu);
  const { isOpen, setIsOpen } = context;
  const router = useRouter();

  const { data } = useSession();
  const user = data?.user;
  const LinksAnimation = {
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

  const ButtonAnimation = {
    hidden: {
      x: -25,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * 5,
      },
    },
    hover: {
      borderRadius: "5px",
      filter: "brightness(80%)",
      transition: {
        delay: 0.05,
      },
    },
  };

  const LineAnimation = {
    hidden: {
      height: 0,
      width: 0,
      opacity: 0.5,
    },
    animate: (index: number) => ({
      height: "100%",
      opacity: 1,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  const NormalLine = {
    hidden: {
      y: -25,
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

  const linksFn = (link: LinksTypes) => {
    if (link.type === "Link") {
      return (
        <Link key={link.index} href={link.href}>
          <motion.li
            variants={LinksAnimation}
            initial="hidden"
            animate="animate"
            custom={link.index}
            className={classNames({
              [styles.active]: pathname === link.href,
              [styles.link]: true,
            })}
          >
            {link.value}
          </motion.li>
        </Link>
      );
    }
    if (link.type === "InView") {
      return (
        <motion.li
          variants={LinksAnimation}
          initial="hidden"
          animate="animate"
          whileHover="hover"
          custom={link.index}
          className={classNames({
            [styles.link]: true,
          })}
          onClick={() => ScrollToElement(link.href, router)}
          key={link.index}
        >
          {link.value}
        </motion.li>
      );
    }
  };

  const AccountSectionFn = () => {
    if (user) {
      return (
        <AccountSection
          name={user.name as string}
          image={user.image as string}
        />
      );
    }
    return (
      <motion.button
        variants={ButtonAnimation}
        initial="hidden"
        animate="animate"
        whileHover="hover"
        className={styles.button}
        onClick={() => signIn("google")}
      >
        تسجيل الدخول
      </motion.button>
    );
  };
  return (
    <>
      <DropDown open={isOpen} setIsOpen={setIsOpen} />
      <nav className={styles.container}>
        <div className={styles.navbarFlex}>
          <header className={styles.header}>
            <AccountSectionFn />
            <motion.hr
              variants={LineAnimation}
              initial="hidden"
              animate="animate"
              custom={1}
              className={styles.linebetween}
            />
            <Link href="/Cart" className={`${styles.shoppingCart} `}>
              <motion.p
                variants={LinksAnimation}
                initial="hidden"
                custom={3}
                animate="animate"
                whileHover="hover"
                aria-length={length}
                className={`${length > 0 && styles.length}`}
              >
                <FiShoppingBag />
              </motion.p>
            </Link>
            <div
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
            </div>
          </header>
          <motion.ul className={styles.ul}>
            <Link href="/" className={styles.brand}>
              <motion.h1
                variants={LinksAnimation}
                initial="hidden"
                animate="animate"
                custom={1}
              >
                {StoreName}
              </motion.h1>
            </Link>
            <motion.hr
              variants={LineAnimation}
              initial="hidden"
              animate="animate"
              custom={0}
              className={styles.linebetween}
            />
            {Links.map((link, index) => linksFn({ ...link, index: index + 3 }))}
          </motion.ul>
        </div>
        <motion.hr
          variants={NormalLine}
          initial="hidden"
          animate="animate"
          custom={1}
          className={styles.line}
        />
      </nav>
    </>
  );
};

export default Navbar;
