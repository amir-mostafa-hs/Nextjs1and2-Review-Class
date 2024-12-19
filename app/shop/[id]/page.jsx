import { ProductsData } from "../page";
import { notFound } from "next/navigation";

const Products = ({ params }) => {
  if (ProductsData.length <= +params.id) {
    return notFound();
  }
  const data = ProductsData[params.id];

  return (
    <div>
      <h2 className="text-2xl">{data.name}</h2>
      <p>{data.price}</p>
    </div>
  );
};
export default Products;
