import { motion } from "framer-motion";
import styles from "./Features.module.css";
const Card = ({ name, index }: { name: string; index: number }) => {
  const cardsAnimation = {
    hidden: {
      y: 25,
      scale: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      scale: 1,

      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    },
  };
  return (
    <motion.div
      variants={cardsAnimation}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={styles.card}
    >
      <p>{name}</p>
    </motion.div>
  );
};

export default Card;
