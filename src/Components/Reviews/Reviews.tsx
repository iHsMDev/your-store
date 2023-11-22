import { motion } from "framer-motion";
import Review from "./Review";
import styles from "./Reviews.module.css";
const Reviews = ({
  email,
  image,
  name,
}: {
  email: string;
  image: string;
  name: string;
}) => {
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
          <Review
            image={image}
            name={name}
            index={0}
            text="يتم استخدام نص لوريم ipum الملء من قبل مصممي الجرافيك والمبرمجين
            والطابعات بهدف شغل مساحات موقع ويب أو منتج إعلاني أو إنتاج تحريري لم
            يكن نصه النهائي جاهزًا بعد."
          />
          <Review
            image={image}
            name={name}
            index={1}
            text="يتم استخدام نص لوريم ipum الملء من قبل مصممي الجرافيك والمبرمجين
            والطابعات بهدف شغل مساحات موقع ويب أو منتج إعلاني أو إنتاج تحريري لم
            يكن نصه النهائي جاهزًا بعد."
          />
          <Review
            image={image}
            name={name}
            index={2}
            text="يتم استخدام نص لوريم ipum الملء من قبل مصممي الجرافيك والمبرمجين
            والطابعات بهدف شغل مساحات موقع ويب أو منتج إعلاني أو إنتاج تحريري لم
            يكن نصه النهائي جاهزًا بعد."
          />
          <Review
            image={image}
            name={name}
            index={3}
            text="يتم استخدام نص لوريم ipum الملء من قبل مصممي الجرافيك والمبرمجين
            والطابعات بهدف شغل مساحات موقع ويب أو منتج إعلاني أو إنتاج تحريري لم
            يكن نصه النهائي جاهزًا بعد."
          />
          <Review
            image={image}
            name={name}
            index={4}
            text="يتم استخدام نص لوريم ipum الملء من قبل مصممي الجرافيك والمبرمجين
            والطابعات بهدف شغل مساحات موقع ويب أو منتج إعلاني أو إنتاج تحريري لم
            يكن نصه النهائي جاهزًا بعد."
          />
        </div>
      </motion.section>
    </main>
  );
};

export default Reviews;
