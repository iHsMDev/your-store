"use client";
import { sendReview } from "@/Server/Actions";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { Flip, toast } from "react-toastify";
import styles from "./Reviews.module.css";
import SubmitButton from "./SubmitButton";
const initialState = {
  message: "",
};
const ReviewInput = () => {
  const { productId } = useParams();
  const user = useSession().data?.user;
  // const [state, formAction] = useFormState(sendReview, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const ani = {
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
  };
  const formAction = async (form: any) => {
    const response = await sendReview(form);

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
    formRef.current?.reset();
  };

  return (
    user && (
      <form ref={formRef} action={formAction} className={styles.reviewInput}>
        <div className={styles.reviewAll}>
          <input name="productId" value={productId} hidden></input>
          <input name="userEmail" value={user?.email as string} hidden></input>
          <div className={styles.NameAndText}>
            <motion.animate
              variants={ani}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <Image
                className={styles.img}
                src={user?.image as string}
                alt="."
                height={50}
                width={50}
                sizes="100vw"
              />
            </motion.animate>
            <motion.textarea
              variants={ani}
              initial="hidden"
              animate="show"
              custom={2}
              className={styles.textarea}
              name="text"
              placeholder="الرسالة"
              rows={4}
              required
            ></motion.textarea>
          </div>

          <motion.animate
            variants={ani}
            initial="hidden"
            animate="show"
            custom={2}
          >
            <SubmitButton />
          </motion.animate>
        </div>
      </form>
    )
  );
};

export default ReviewInput;
