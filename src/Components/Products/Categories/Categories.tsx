import { getCategories } from "@/Server/Actions";
import styles from "./Categories.module.css";
import Category from "./Category";
const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <Category
          key={index}
          name={category.name}
          category_name={category.category_name}
          index={index}
        />
      ))}
    </div>
  );
};

export default Categories;
