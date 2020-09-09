import React, { useState } from "react";
import Navbar from "../../presentational/navbar/Navbar";
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  const [forSearch, setForSearch] = useState("");
  const handleChange = (e) => setForSearch(e.target.value);
  const handleClick = (e) => setForSearch("");
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const key = forSearch;
      setForSearch("");
      history.push(`/items?search=${key}`);
    }
  };
  return (
    <Navbar
      value={forSearch}
      change={handleChange}
      enter={handleEnter}
      click={handleClick}
    />
  );
}
