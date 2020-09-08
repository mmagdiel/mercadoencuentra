import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../images/Logo_ML.png";
import search from "../../images/ic_Search.png";

const placeholderSearch = "Nunca dejes de buscar";
const mercadolibreLogo = "Logo de Mercadolibre";
const searchIcon = "Boton de busqueda";

function NavBar() {
  const [forSearch, SetForSearch] = useState("");
  const handleClick = () => console.log("Hola");
  const handleChange = (e) => SetForSearch(e.target.value);
  return (
    <div className="row nav mx-0">
      <div className="col-sm-1 col-md-2 col-lg-3"></div>
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
        <div className="row my-2 px-2">
          <img src={logo} alt={mercadolibreLogo} />
          <input
            type="text"
            name="search"
            className="navbar-search mr-2 px-2"
            placeholder={placeholderSearch}
            value={forSearch}
            onChange={handleChange}
          />
          <button className="navbar-search-button px-2" onClick={handleClick}>
            <img src={search} alt={searchIcon} />
          </button>
        </div>
      </div>
      <div className="col-sm-1 col-md-2 col-lg-3"></div>
    </div>
  );
}

export default NavBar;
