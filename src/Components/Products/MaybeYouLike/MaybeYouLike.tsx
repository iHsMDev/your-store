"use client";
import Card from "@/Components/Most/Card";
import styles from "./MaybeYouLike.module.css";
const MaybeYouLike = ({ products }: { products: any }) => {
  const coard = (index: number, data: any) => {
    if (index < 5) {
      return <Card key={index} index={index} {...data} />;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {products.map((most: any, index: number) => coard(index, most))}
      </div>
    </div>
  );
};

export default MaybeYouLike;
