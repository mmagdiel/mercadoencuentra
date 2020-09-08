import React from "react";
import "./Navbar.scss";
import logo from "../../images/Logo_ML.png";
import search from "../../images/ic_Search.png";
import { Link } from "react-router-dom";
import {
  mercadolibreLogo,
  searchIcon,
  placeholderSearch,
} from "../../copies/navbar";
import cl from "classnames";

export default function NavBar({ value, change, enter, click }) {
  return (
    <div className="row nav mx-0">
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-8">
        <div className="row my-2 px-2">
          <Link to="/">
            <img src={logo} alt={mercadolibreLogo} />
          </Link>
          <input
            type="text"
            name="search"
            className="navbar-search"
            placeholder={placeholderSearch}
            value={value}
            onChange={change}
            onKeyDown={enter}
          />
          <Link
            onClick={click}
            to={`/items?search=${value}`}
            className={cl("navbar-search-button", {
              disabled: !value,
            })}
          >
            <img src={search} alt={searchIcon} />
          </Link>
        </div>
      </div>
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
    </div>
  );
}
