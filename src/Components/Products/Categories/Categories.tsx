"use client";
import { categories } from "@/Data/Info";
import styles from "./Categories.module.css";
import Category from "./Category";
const Categories = () => {
  return (
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <Category
          key={index}
          name={category.name}
          count={category.count}
          href={category.href}
          icon={category.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default Categories;
