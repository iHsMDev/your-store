import { motion } from "framer-motion";
import LastVisitedCard from "./LastVisitedCard";
import styles from "./Profile.module.css";
const LastVisited = () => {
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
      className={styles.lastVisited}
    >
      <motion.header
        variants={animation}
        initial="hidden"
        animate="show"
        custom={1}
        className={styles.LastVisitedHeader}
      >
        أخر منتج تم زيارته
      </motion.header>
      <motion.div
        variants={animation}
        initial="hidden"
        animate="show"
        custom={2}
        className={styles.cardContainer}
      >
        <LastVisitedCard />
      </motion.div>
    </motion.section>
  );
};

export default LastVisited;
