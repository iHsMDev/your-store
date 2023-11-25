import Image from "next/image";
import styles from "./Reviews.module.css";
const ReviewImage = ({ image }: { image: string }) => {
  return (
    <Image
      className={styles.img}
      src={image}
      alt={"."}
      height={100}
      width={100}
    />
  );
};

export default ReviewImage;
