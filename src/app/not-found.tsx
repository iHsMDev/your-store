import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Error from "/public/Error.svg";
const notFound = () => {
  return (
    <main className={styles.errorContainer}>
      <Image src={Error} alt="Error" />
      <h2 className={styles.text}>عذرًا! الصفحة المطلوبة غير متوفرة</h2>
      <Link href="/" className={styles.backbutton}>
        الرجوع إلى الصفحة الرئيسية
      </Link>
    </main>
  );
};

export default notFound;
