import React from "react";
import style from "components/Shared/Navbar/index.module.scss";
import { LOGO, ALT_LOGO, ICON_SEARCH, ALT_SEARCH } from "utils/constant";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={LOGO} alt={ALT_LOGO} />
          <h1 className={style.title}>Todos</h1>
        </div>
        <img src={ICON_SEARCH} alt={ALT_SEARCH} />
      </div>
    </div>
  );
};

export default Navbar;
