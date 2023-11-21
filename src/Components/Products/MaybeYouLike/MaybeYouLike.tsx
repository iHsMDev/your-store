"use client";
import Card from "@/Components/Most/Card";
import { MostPopular } from "@/Data/Info";
import styles from "./MaybeYouLike.module.css";
const MaybeYouLike = () => {
  const coard = (index: number, data: any) => {
    if (index < 5) {
      return <Card key={index} index={index} {...data} />;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {MostPopular.map((most, index) => coard(index, most))}
      </div>
    </div>
  );
};

export default MaybeYouLike;
