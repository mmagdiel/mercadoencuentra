import React from "react";
import "./Navbar.scss";
import logo from "../../images/Logo_ML.png";
import search from "../../images/ic_Search.png";
import {
  mercadolibreLogo,
  searchIcon,
  placeholderSearch,
} from "../../copies/navbar";

export default function NavBar({ value, change, click }) {
  return (
    <div className="row nav mx-0">
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-8">
        <div className="row my-2 px-2">
          <img src={logo} alt={mercadolibreLogo} />
          <input
            type="text"
            name="search"
            className="navbar-search mr-2 px-2"
            placeholder={placeholderSearch}
            value={value}
            onChange={change}
          />
          <button className="navbar-search-button px-2" onClick={click}>
            <img src={search} alt={searchIcon} />
          </button>
        </div>
      </div>
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
    </div>
  );
}
