import BackButton from "@/Components/BackButton/BackButton";
import Header from "@/Components/Header/Header";
import Card from "@/Components/Most/Card";
import { getCategoryName, getCategoryProducts } from "@/Server/Actions";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type ParamsTypes = {
  params: {
    category: string;
  };
};
const page = async ({ params }: ParamsTypes) => {
  const { category } = params;
  try {
    const data = await getCategoryName(category);
    const products = await getCategoryProducts(category);

    return (
      <main className={styles.container}>
        <Header text={data.name} />
        <section className={styles.products}>
          {products.map((most, index) => (
            <Card
              key={index}
              _id={`${most._id}`}
              name={most.name}
              index={index}
              img={most.img}
              price={most.price}
            />
          ))}
        </section>
        <BackButton href="/Products" />
      </main>
    );
  } catch (error) {
    notFound();
  }
};

export default page;
