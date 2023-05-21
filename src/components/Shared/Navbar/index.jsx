import React from "react";
import {
  ICON_LOGO,
  LOGO_ICON_ALT_TEXT,
  ICON_SEARCH,
  SEARCH_ICON_ALT_TEXT,
} from "utils/constant/images";
import "components/Shared/Navbar/index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex align-center justify-between navbar__container">
        <div className="flex justify-center align-center ">
          <img src={ICON_LOGO} alt={LOGO_ICON_ALT_TEXT} />
          <h1 className="navbar__container__title">Todos</h1>
        </div>
        <img src={ICON_SEARCH} alt={SEARCH_ICON_ALT_TEXT} />
      </div>
    </div>
  );
};

export default Navbar;
