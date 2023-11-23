import Features from "@/Components/Features/Features";
import Home from "@/Components/Home/Home";
import Most from "@/Components/Most/Most";
import styles from "./page.module.css";
const page = async () => {
  return (
    <>
      <main className={styles.container}>
        <Home />
      </main>
      <Features />
      <Most />
    </>
  );
};

export default page;
