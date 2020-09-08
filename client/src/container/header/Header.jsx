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
      history.push(`/items?search=${forSearch}`);
      setForSearch("");
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
