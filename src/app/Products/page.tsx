import Header from "@/Components/Header/Header";
import Categories from "@/Components/Products/Categories/Categories";
import MaybeYouLike from "@/Components/Products/MaybeYouLike/MaybeYouLike";
import { Links, StoreName } from "@/Data/Info";
import { getProducts } from "@/Server/Actions";
import { Metadata } from "next";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: `${StoreName} - ${Links[1].value}`,
};
const Products = async () => {
  const products = await getProducts();
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <Header text={"الأقسام"} />
        <Categories />
      </section>
      <section className={styles.section}>
        <Header text="منتجات قد تعجبك" />

        <MaybeYouLike products={products} />
      </section>
    </main>
  );
};

export default Products;
