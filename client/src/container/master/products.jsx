import React, { useState } from "react";
import useData from "../../hooks/useData";
import { urlSearch } from "../../constants/urls";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

export default function ListSearch() {
  let location = useLocation();
  let history = useHistory();
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  if (!parsed.search) {
    history.push(`/`);
  }
  const url = urlSearch + parsed.search;
  const products = useData(url);
  return (
    <div>
      Hola
      {console.log(products)}
    </div>
  );
}

/*

  const handleChange = (e) => setForSearch(e.target.value);
  const handleClick = (e) => setForSearch("");
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      history.push(`/items?search=${forSearch}`);
      setForSearch("");
    }
  };
    <Navbar
      value={forSearch}
      change={handleChange}
      enter={handleEnter}
      click={handleClick}
    />
*/
