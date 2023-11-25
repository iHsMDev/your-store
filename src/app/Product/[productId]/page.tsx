import ProductContainer from "@/Components/ProductPage/ProductContainer";
import { getProduct, getReviews } from "@/Server/Actions";
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

    return <ProductContainer reviews={reviews} {...data} />;
  } catch (error) {
    notFound();
  }
};

export default page;
