import { motion } from "framer-motion";
import Review from "./Review";
import styles from "./Reviews.module.css";
const Reviews = ({ reviews }: { reviews: any }) => {
  const ani = {
    hidden: {
      y: 25,
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

  return (
    <main className={styles.container}>
      <motion.header
        variants={ani}
        initial="hidden"
        animate="show"
        className={styles.header}
      >
        المراجعات
      </motion.header>
      <motion.section
        variants={ani}
        initial="hidden"
        animate="show"
        className={styles.reviewsContainer}
      >
        <div className={styles.reviews}>
          {reviews.map((review: any, index: number) => (
            <Review
              {...review}
              index={index}
              key={index}
              reviewId={review._id}
              userEmail={review.user}
              product_Id={review.productId}
            />
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Reviews;
