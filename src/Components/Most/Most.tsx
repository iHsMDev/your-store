import { MostPopular } from "@/Data/Info";
import { motion } from "framer-motion";
import Card from "./Card";
import styles from "./Most.module.css";
const Most = () => {
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05,
      },
    },
  };
  return (
    <section className={styles.container}>
      <motion.header
        variants={animation}
        initial="hidden"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className={styles.header}
      >
        المنتجات الأكثر مبيعآ
      </motion.header>

      <div className={styles.cards}>
        {MostPopular.map((most, index) => (
          <Card
            key={index}
            name={most.name}
            index={index}
            img={most.img}
            price={most.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Most;
