import { HomeButtons } from "@/Data/Info";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Home.module.css";
const Buttons = ({ animation }: { animation: any }) => {
  return (
    <div className={styles.buttons}>
      {HomeButtons.map((button, index) => (
        <Link key={index} href={button.href}>
          <motion.button
            variants={animation}
            initial="hidden"
            animate="animate"
            custom={index + 3}
            whileHover="buttonsHover"
            className={classNames({
              [styles.btn]: true,
              [styles.primaryBTN]: button.class == 1,
              [styles.secondaryBTN]: button.class == 2,
            })}
          >
            {button.value}
          </motion.button>
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
