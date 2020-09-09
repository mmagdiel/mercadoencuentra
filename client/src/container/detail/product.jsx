import React, { useState } from "react";
//import useData from "../../hooks/useData";
import { urlSearch } from "../../constants/urls";
import { useParams } from "react-router-dom";

export default function ListSearch() {
  let { slug, search } = useParams();
  let location = useLocation();
  const url = urlSearch + "hola";
  console.log(url, slug, search, location);
  //const listProducts = useData();

  return <div>Hola</div>;
}
