import React from "react";
import style from "components/Shared/Navbar/index.module.scss";
import {
  ICON_LOGO,
  LOGO_ICON_ALT_TEXT,
  ICON_SEARCH,
  SEARCH_ICON_ALT_TEXT,
} from "utils/constant";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.container__navbar}>
        <div className={style.container__navbar__logo}>
          <img src={ICON_LOGO} alt={LOGO_ICON_ALT_TEXT} />
          <h1 className={style.container__navbar__logo__title}>Todos</h1>
        </div>
        <img src={ICON_SEARCH} alt={SEARCH_ICON_ALT_TEXT} />
      </div>
    </div>
  );
};

export default Navbar;
