import {
  DeleteItem,
  IncrementCount,
  disIncrementCount,
} from "@/Server/Actions";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import styles from "./Cart.module.css";
const Actions = ({
  email,
  count,
  id,
}: {
  email: string;
  count: number;
  id: string;
}) => {
  const router = useRouter();

  const buttons = {
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
      y: -5,
      filter: "brightness(86%)",
      transition: {
        delay: 0.05,
      },
    },
    tap: {
      y: 0,
      scale: 0.5,
      filter: "brightness(86%)",

      transition: {
        delay: 0.05,
      },
    },
  };
  return (
    <footer className={styles.actions}>
      <motion.div
        variants={buttons}
        initial="hidden"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        custom={0}
        className={styles.addCount}
        onClick={() => IncrementCount(email, id)}
      >
        <FiPlus />
      </motion.div>
      (<p className={styles.itemCount}>{count}</p>)
      <motion.div
        variants={buttons}
        initial="hidden"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        custom={1}
        className={styles.removeCount}
        onClick={() => disIncrementCount(email, id)}
      >
        <FiMinus />
      </motion.div>
      <motion.div
        variants={buttons}
        initial="hidden"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        custom={2}
        className={styles.Delete}
        onClick={() => DeleteItem(email, id)}
      >
        <FiTrash2 />
      </motion.div>
    </footer>
  );
};

export default Actions;
