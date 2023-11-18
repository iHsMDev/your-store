import { StoreDescription, StoreName } from "@/Data/Info";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Header = ({ animation }: { animation: any }) => {
  return (
    <>
      <motion.header
        variants={animation}
        initial="hidden"
        animate="animate"
        custom={1}
        className={styles.header}
      >
        {StoreName}
      </motion.header>
      <motion.p
        variants={animation}
        initial="hidden"
        animate="animate"
        custom={2}
        className={styles.paragraph}
      >
        {StoreDescription}
      </motion.p>
    </>
  );
};

export default Header;
