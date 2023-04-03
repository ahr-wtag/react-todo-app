import React from "react";
import logo from "../../../assets/images/icons/logo.png";
import search from "../../../assets/images/icons/search.png";
import style from "./index.module.scss";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <h1>Todos</h1>
        </div>
        <div>
          <img src={search} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
