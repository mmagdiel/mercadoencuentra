import React from "react";
import Product from "../container/detail/Product";
import { urlDetail } from "../constants/urls";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  console.log(id);
  const url = urlDetail + id;
  return <Product url={url} />;
}
