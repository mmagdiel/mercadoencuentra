import React from "react";
import useData from "../../hooks/useData";
import Card from "../../presentational/product/Card";
import Loader from "../../presentational/loader/Loader";

export default function Product({ url }) {
  const product = useData(url);
  return product.length === 0 ? <Loader /> : <Card product={product} />;
}
