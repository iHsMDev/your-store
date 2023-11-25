import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import styles from "./Reviews.module.css";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05,
      },
    },
    inView: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05,
      },
    },
    hover: {
      y: -5,

      filter: "brightness(80%)",
      transition: {
        delay: 0.05,
      },
    },
  };
  return (
    <motion.button
      variants={animation}
      whileHover="hover"
      initial="hidden"
      animate="show"
      type="submit"
      className={styles.SendButton}
      aria-disabled={pending}
    >
      {pending ? "يتم الأرسال..." : "أرسال"}
    </motion.button>
  );
};

export default SubmitButton;
