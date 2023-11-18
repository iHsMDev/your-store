import { motion } from "framer-motion";
import Image from "next/image";
import HomeImage from "public/Home.svg";
import Buttons from "./Buttons";
import Header from "./Header";
import styles from "./Home.module.css";
const Home = () => {
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * index,
      },
    }),
    buttonsHover: {
      filter: "brightness(80%)",
      borderRadius: "var(--btn-hover-radius)",
    },
  };
  return (
    <>
      <motion.div
        variants={animation}
        initial="hidden"
        animate="animate"
        custom={0}
      >
        <Image className={styles.vector} src={HomeImage} alt="Home" />
      </motion.div>
      <div className={styles.texts}>
        <Header animation={animation} />
        <Buttons animation={animation} />
      </div>
    </>
  );
};

export default Home;
