import Cart from "@/Components/Cart/Cart";
import Header from "@/Components/Header/Header";
import styles from "./page.module.css";
const page = () => {
  return (
    <main className={styles.container}>
      <Header text="سلة المشتريات" />
      <Cart />
    </main>
  );
};

export default page;
