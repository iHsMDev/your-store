"use client";
type ProductData = {
  name: string;
  _id: string;
  img: string;
  description: string;
  purchases: string;
  price: number;
  reviews: any;
};
import { motion } from "framer-motion";

import { AddToCart } from "@/Server/Actions";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Flip, toast } from "react-toastify";
import Review from "../Reviews/Review";
import ReviewInput from "../Reviews/ReviewInput";
import styles from "./Product.module.css";
const ProductContainer = (props: ProductData) => {
  const user = useSession().data?.user;
  const Cart = async () => {
    const response = AddToCart(props._id, user?.email as string);
    const { message, desc, ok } = await response;
    const loading = toast.loading("لحظة واحدة...", {
      transition: Flip,
    });
    toast.dismiss(loading);

    setTimeout(() => {
      toast(
        `${message} ${
          desc.name && "|" + desc.name + " " + Math.floor(desc.price)
        }`,
        {
          type: ok ? "success" : "error",
          isLoading: false,
          transition: Flip,
          autoClose: 2000,
          hideProgressBar: false,
          closeButton: true,
          closeOnClick: true,
          pauseOnHover: true,
        }
      );
    }, 500);
  };

  const dataAniamtion = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    animate: (ind: number) => ({
      y: 0,

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
  return (
    <main className={styles.container}>
      <section className={styles.product}>
        <motion.div
          variants={dataAniamtion}
          initial="hidden"
          whileInView="animate"
          whileHover="hoverd"
          custom={3}
          className={styles.productImage}
        >
          <Image
            className={styles.img}
            src={props.img}
            alt="."
            height={150}
            width={150}
          />
        </motion.div>
        <div className={styles.text}>
          <motion.h1
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={1}
          >
            {props.name}
          </motion.h1>
          <motion.p
            variants={dataAniamtion}
            initial="hidden"
            whileInView="animate"
            custom={2}
            className={styles.desc}
          >
            {props.description}
          </motion.p>

          <section className={styles.addToCartButton}>
            <motion.p
              variants={dataAniamtion}
              initial="hidden"
              whileInView="animate"
              custom={4}
            >
              {props.price} ريال
            </motion.p>
            <motion.span
              variants={dataAniamtion}
              initial="hidden"
              whileInView="animate"
              whileHover="hoverd"
              custom={5}
            >
              /
            </motion.span>
            <motion.button
              variants={dataAniamtion}
              initial="hidden"
              whileInView="animate"
              whileHover="hoverd"
              custom={5}
              onClick={Cart}
              className={styles.button}
            >
              <TbShoppingCartPlus /> أضف إلى السلة
            </motion.button>
          </section>
        </div>
      </section>
      <motion.section
        variants={dataAniamtion}
        initial="hidden"
        whileInView="animate"
        custom={6}
        className={styles.reviewsContainer}
      >
        <header>المراجعات</header>
        <div className={styles.reviews}>
          {props.reviews.map((review: any, index: number) => (
            <Review
              type="ProductPage"
              key={index}
              index={index}
              reviewId={review._id}
              userEmail={review.user}
              {...review}
            />
          ))}
          <ReviewInput />
        </div>
      </motion.section>
    </main>
  );
};

export default ProductContainer;
