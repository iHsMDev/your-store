import styles from "./MaybeYouLike.module.css";
const MaybeYouLike = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};

export default MaybeYouLike;
