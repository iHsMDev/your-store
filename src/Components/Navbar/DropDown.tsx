import { Links } from "@/Data/Info";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingBag } from "react-icons/fi";
import styles from "./Navbar.module.css";
const DropDown = ({
  open,
  setIsOpen,
}: {
  open: boolean;
  setIsOpen: Function;
}) => {
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transiton: {
        delay: 0.05,
      },
    },
  };
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
    hover: {
      color: "var(--clr-link-active)",
      transition: {
        delay: 0.05,
      },
    },
  };
  const pathname = usePathname();

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate={open ? "animate" : ""}
      className={styles.dropdown}
    >
      <ul className={styles.dropdownUL}>
        {Links.map((link, index) => (
          <Link onClick={() => setIsOpen(false)} key={index} href={link.href}>
            <motion.li
              variants={LinksAnimation}
              initial="hidden"
              animate="animate"
              whileHover="hover"
              custom={index}
              className={classNames({
                [styles.active]: pathname === link.href,
                [styles.link]: true,
              })}
            >
              {link.value}
            </motion.li>
          </Link>
        ))}
        <Link href="/Cart" className={styles.shoppingCart}>
          <motion.p
            variants={LinksAnimation}
            initial="hidden"
            custom={3}
            animate="animate"
            whileHover="hover"
            className={styles.shop}
          >
            <FiShoppingBag /> سلة المشتريات
          </motion.p>
        </Link>
      </ul>
    </motion.div>
  );
};

export default DropDown;
