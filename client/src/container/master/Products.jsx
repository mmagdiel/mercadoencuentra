import React from "react";
import useData from "../../hooks/useData";
import Loader from "../../presentational/loader/Loader";
import CardProduct from "../../presentational/cardProduct/CardProduct";

export default function Products({ url }) {
  const products = useData(url);
  return products.length === 0 ? (
    <Loader />
  ) : (
    <div className="row mx-0">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
