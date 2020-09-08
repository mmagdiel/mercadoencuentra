import React from "react";
import Navbar from "../components/header/Navbar";

export default function WithLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
