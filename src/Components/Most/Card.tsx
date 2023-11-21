import { AddToCart } from "@/Server/Actions";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Flip, toast } from "react-toastify";
import styles from "./Most.module.css";

interface Data {
  message: string;
}

const Card = ({
  img,
  price,
  index,
  name,
}: {
  img: string;
  price: number;
  index: number;
  name: string;
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
  const user = useSession().data?.user;
  const Cart = async (index: number, email: string) => {
    const response = AddToCart(index, email);
    const { message, desc, ok } = await response;
    const loading = toast.loading("لحظة واحدة...", {
      transition: Flip,
    });
    toast.dismiss(loading);

    setTimeout(() => {
      toast(`${message} ${desc.name && "|"} ${desc.name} ${desc.price}`, {
        type: ok ? "success" : "error",
        isLoading: false,
        transition: Flip,
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }, 500);
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
      <Image src={img} alt="wtf" />
      <div className={styles.price}>
        <motion.button
          variants={dataAniamtion}
          initial="hidden"
          whileInView="animate"
          whileHover="hoverd"
          custom={5}
          onClick={() => Cart(index, user?.email as string)}
          className={`${styles.button} button`}
        >
          <TbShoppingCartPlus /> أضف إلى السلة
        </motion.button>
        <div className={styles.data}>
          <motion.p
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={6}
            className={styles.name}
          >
            {name}
          </motion.p>
          <motion.p
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={7}
          >
            {price} ريال
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
