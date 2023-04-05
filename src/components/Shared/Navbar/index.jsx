import React from "react";
import style from "components/Shared/Navbar/index.module.scss";
import { LOGO, LOGO_ALT, SEARCH, SEARCH_ALT } from "utils/constant";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={LOGO} alt={LOGO_ALT} />
          <h1 className={style.title}>Todos</h1>
        </div>
        <div>
          <img src={SEARCH} alt={SEARCH_ALT} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
