import React, { useState } from "react";
import Navbar from "../../presentational/navbar/Navbar";

export default function Header() {
  const [forSearch, setForSearch] = useState("");
  const handleChange = (e) => setForSearch(e.target.value);
  return <Navbar value={forSearch} change={handleChange} />;
}
