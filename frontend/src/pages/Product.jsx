import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductDisplay product={product} />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
