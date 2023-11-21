import { FeaturesData } from "@/Data/Info";
import { motion } from "framer-motion";
import Image from "next/image";
import Stars from "public/Stars.svg";
import Card from "./Card";
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

  const headerAnimation = {
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
  return (
    <motion.section
      variants={all}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={styles.container}
      id="Features"
    >
      <motion.header
        variants={headerAnimation}
        initial="hidden"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={1}
        className={styles.header}
      >
        <Image src={Stars} alt="Stars" />
        <motion.h1
          variants={headerAnimation}
          initial="hidden"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={5}
          className={styles.text}
        >
          المميزات
        </motion.h1>
      </motion.header>

      <motion.div className={styles.cards}>
        {FeaturesData.map((feature, index) => (
          <Card key={index} index={index} name={feature.name} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;
