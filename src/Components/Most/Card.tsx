import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Most.module.css";

const Card = ({
  img,
  price,
  index,
  _id,
  name,
  width,
}: {
  img: string;
  price: number;
  index: number;
  _id: string;
  name: string;
  width?: number;
}) => {
  const router = useRouter();
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
        delay: 0.15 * index,
      },
    },
  };

  const dataAniamtion = {
    hidden: {
      y: 25,
      scale: 0,
      opacity: 0,
    },
    animate: (ind: number) => ({
      y: 0,
      scale: 1,

      opacity: 1,
      transition: {
        delay: 0.05 * ind,
      },
    }),
    hoverd: {
      y: -5,
      filter: "brightness(80%)",
      transition: {
        delay: 0.05,
      },
    },
  };
  const [isOpen, setIsOpen] = useState<any>(false);
  const [title, setTitle] = useState("");

  const tooltipFn = () => {
    setTitle(name);
    setIsOpen((prev: boolean) => !prev);
  };
  const ani = {
    hidden: {
      y: -25,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05,
      },
    },
  };
  const user = useSession().data?.user;

  return (
    <motion.div
      variants={cardsAnimation}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={styles.card}
      style={{ width: `${width}px` }}
    >
      <motion.span
        variants={ani}
        initial="hidden"
        animate={isOpen ? "show" : ""}
        className={styles.tooltip}
      >
        {title}
      </motion.span>
      <Image src={img} alt="." sizes="100vw" height={100} width={100} />
      <div className={styles.price}>
        <Link href={`/Product/${_id}`}>
          <motion.button
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            whileHover="hoverd"
            custom={5}
            className={`${styles.button} button`}
          >
            معلومات المنتج
          </motion.button>
        </Link>
        <div className={styles.data}>
          <motion.p
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={6}
            className={styles.name}
            onHoverStart={tooltipFn}
            onHoverEnd={tooltipFn}
          >
            {name}
          </motion.p>
          <motion.p
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={7}
          >
            {Math.floor(price)} ريال
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
