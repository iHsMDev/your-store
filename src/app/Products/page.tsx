import { Links, StoreName } from "@/Data/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${StoreName} - ${Links[1].value}`,
};
const Products = () => {
  return <div style={{ height: "5000px" }}>Products</div>;
};

export default Products;
