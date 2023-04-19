import React, { useEffect, useState } from "react";
import style from "components/Shared/Navbar/index.module.scss";
import {
  LOGO,
  LOGO_ALT,
  ICON_SEARCH,
  SEARCH_ALT,
  PAGINATION_LIMIT,
} from "utils/constant";
import { useDispatch } from "react-redux";
import { loadingState, paginationUpdate, searchTask } from "store/actions";
import { sanitizeText } from "utils/helpers/sanitizeText";

const Navbar = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingState(true));
    const timerId = setTimeout(() => {
      dispatch(loadingState(false));

      dispatch(searchTask(searchText));
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchText]);

  const handleChange = (event) => {
    const sanitizedText = sanitizeText(event.target.value);
    setSearchText(sanitizedText);
  };

  const setVisibality = () => {
    setSearchBarVisible(!searchBarVisible);
    dispatch(paginationUpdate(PAGINATION_LIMIT));
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={LOGO} alt={LOGO_ALT} />
          <h1 className={style.title}>Todos</h1>
        </div>
        <div className={style.searchBar}>
          {searchBarVisible && (
            <input
              onChange={handleChange}
              autoFocus
              className={style.searchField}
            ></input>
          )}
          <img onClick={setVisibality} src={ICON_SEARCH} alt={SEARCH_ALT} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
