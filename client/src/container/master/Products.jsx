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
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-8">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
    </div>
  );
}
