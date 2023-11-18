import { motion } from "framer-motion";
import styles from "./Features.module.css";
const Features = () => {
  const all = {
    hidden: {
      width: 0,
      opacity: 1,
    },
    animate: {
      width: "100%",
      opacity: 1,

      transition: {
        delay: 0.25,
      },
    },
  };
  return (
    <motion.section
      variants={all}
      initial="hidden"
      animate="animate"
      className={styles.container}
    >
      المميزات
    </motion.section>
  );
};

export default Features;
