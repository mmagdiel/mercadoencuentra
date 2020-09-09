import React from "react";
import Products from "../container/master/Products";
import { urlSearch } from "../constants/urls";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

export default function Master() {
  let history = useHistory();
  let location = useLocation();
  const parsed = queryString.parse(location.search);
  if (!parsed.search) {
    history.push(`/`);
  }
  const url = urlSearch + parsed.search;
  return <Products url={url} />;
}
