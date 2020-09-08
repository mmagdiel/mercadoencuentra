import React, { useState } from "react";
import Navbar from "../../presentational/navbar/Navbar";

export default function Header() {
  const [forSearch, SetForSearch] = useState("");
  const handleClick = () => console.log("Hola");
  const handleChange = (e) => SetForSearch(e.target.value);
  return <Navbar change={handleChange} click={handleClick} value={forSearch} />;
}
