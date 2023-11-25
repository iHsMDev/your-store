import ProductContainer from "@/Components/ProductPage/ProductContainer";
import { getCategoryName, getProduct, getReviews } from "@/Server/Actions";
import { notFound } from "next/navigation";

type ProductParams = {
  params: {
    productId: string;
  };
};
const page = async ({ params }: ProductParams) => {
  const id = params.productId;
  try {
    const reviews = await getReviews(id);
    const data = await getProduct(id);

    const category = await getCategoryName(data.category);

    return (
      <ProductContainer reviews={reviews} {...data} category={category.name} />
    );
  } catch (error) {
    notFound();
  }
};

export default page;
