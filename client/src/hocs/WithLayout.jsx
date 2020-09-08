import React from "react";
import Header from "../container/header/Header";

export default function WithLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
