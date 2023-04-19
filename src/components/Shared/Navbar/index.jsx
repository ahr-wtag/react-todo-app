import React, { useState } from "react";
import style from "components/Shared/Navbar/index.module.scss";
import { LOGO, LOGO_ALT, ICON_SEARCH, SEARCH_ALT } from "utils/constant";
const Navbar = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={LOGO} alt={LOGO_ALT} />
          <h1 className={style.title}>Todos</h1>
        </div>
        <div className={style.searchBar}>
          {searchBarVisible && <input className={style.searchField}></input>}
          <img
            onClick={() => setSearchBarVisible(!searchBarVisible)}
            src={ICON_SEARCH}
            alt={SEARCH_ALT}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
