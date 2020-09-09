import React from "react";
import "./Loader.scss";
import { loaderText } from "../../copies/loader";

export default function Loader() {
  return (
    <div className="main">
      <div>{loaderText}</div>
    </div>
  );
}
