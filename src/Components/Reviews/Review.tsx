"use client";
import { deleteReview, getProfileFromEmail } from "@/Server/Actions";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/ar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Flip, toast } from "react-toastify";
import ReviewImage from "./ReviewImage";
import styles from "./Reviews.module.css";
export const dynamic = "force-dynamic";
const Review = ({
  userEmail,
  index,
  text,
  createdAt,
  reviewId,
  type,
  image,
  product_Id,
}: {
  userEmail: string;
  index: number;
  text: string;
  type?: string;
  createdAt: Date;
  product_Id?: string;
  image: string;
  reviewId: string;
}) => {
  const user = useSession().data?.user;
  const { productId } = useParams();
  const Actions = () => {
    const deleteReviewFn = async () => {
      const response = await deleteReview(reviewId, productId as string);
      toast(response?.message, {
        type: response?.ok ? "success" : "error",
        isLoading: false,
        transition: Flip,
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    };
    if (userEmail === user?.email) {
      return (
        <>
          <motion.button
            variants={animation}
            initial="hidden"
            animate="show"
            whileHover="hover"
            className={styles.DeleteButton}
            onClick={() => deleteReviewFn()}
          >
            <FiTrash2 />
          </motion.button>
        </>
      );
    }
  };
  const animation = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
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
  const [name, setName] = useState("");
  const [fromNow, setfromNow] = useState(moment(createdAt).fromNow());
  useEffect(() => {
    const api = async () => {
      const data = await getProfileFromEmail(userEmail);
      setName(data.name);
    };
    api();
  }, [userEmail]);

  useEffect(() => {
    setfromNow(moment(createdAt).fromNow());
  }, [user]);
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate={index < 5 ? "show" : ""}
      whileInView={index < 5 ? "" : "inView"}
      viewport={{
        once: true,
      }}
      className={styles.review}
    >
      <header className={styles.reivewHeader}>
        <Link
          href={
            user?.name !== name
              ? `/profile/${name.split(" ").join("").toLocaleLowerCase()}`
              : "/profile"
          }
        >
          <ReviewImage image={image} />
        </Link>
        <div className={styles.data}>
          <div className={styles.nameAndDate}>
            <p className={styles.date}>{fromNow}</p>
            <p className={styles.between}>-</p>
            <p>{name}</p>
          </div>
          <p className={styles.comment}>{text}</p>
        </div>
      </header>
      {type !== "ProductPage" && (
        <Link href={`/Product/${product_Id}`}>
          <motion.button
            variants={animation}
            initial="hidden"
            animate="show"
            whileHover="hover"
            className={styles.button}
          >
            رؤية المنتج
          </motion.button>
        </Link>
      )}
      <Actions />
    </motion.div>
  );
};

export default Review;
