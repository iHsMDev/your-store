import Categories from "@/Components/Products/Categories/Categories";
import Header from "@/Components/Products/Header/Header";
import MaybeYouLike from "@/Components/Products/MaybeYouLike/MaybeYouLike";
import { Links, StoreName } from "@/Data/Info";
import { Metadata } from "next";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: `${StoreName} - ${Links[1].value}`,
};
const Products = () => {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <Header text={"الأقسام"} />
        <Categories />
      </section>
      <section className={styles.section}>
        <Header text="منتجات قد تعجبك" />

        <MaybeYouLike />
      </section>
    </main>
  );
};

export default Products;
