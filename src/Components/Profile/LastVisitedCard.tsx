import { MostPopular } from "@/Data/Info";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Profile.module.css";
const LastVisitedCard = () => {
  const btn = {
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
      y: -5,

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
    <div className={styles.cardContainer}>
      {MostPopular.map(
        (m, i) =>
          i == 0 && (
            <>
              <Image
                className={styles.imageLast}
                src={m.img}
                alt="ff"
                sizes="100vw"
                width={70}
                height={70}
              />
              <div className={styles.data}>
                <motion.p
                  variants={btn}
                  initial="hidden"
                  animate="show"
                  custom={0}
                  className={styles.Dataname}
                >
                  {m.name}
                </motion.p>
                <motion.p
                  variants={btn}
                  initial="hidden"
                  animate="show"
                  custom={1}
                  className={styles.Dataprice}
                >
                  {m.price} ريال
                </motion.p>

                <Link href="">
                  <motion.button
                    variants={btn}
                    initial="hidden"
                    animate="show"
                    whileHover="hover"
                    whileTap="tap"
                    custom={2}
                    className={styles.Databutton}
                  >
                    زيارة المنتج
                  </motion.button>
                </Link>
              </div>
            </>
          )
      )}
    </div>
  );
};

export default LastVisitedCard;
