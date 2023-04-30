import React, { useEffect, useState } from "react";
import style from "components/Shared/Navbar/index.module.scss";
import {
  ICON_LOGO,
  LOGO_ICON_ALT_TEXT,
  ICON_SEARCH,
  SEARCH_ICON_ALT_TEXT,
  PAGINATION_LIMIT,
} from "utils/constant";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadingState, paginationUpdate, searchTask } from "store/actions";
import { sanitizeText } from "utils/helpers/sanitizeText";

const Navbar = ({ searchText, onSearchText }) => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingState(true));
    const timerId = setTimeout(() => {
      dispatch(loadingState(false));
      const sanitizedText = sanitizeText(searchText);
      dispatch(searchTask(sanitizedText));
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchText]);

  const handleChange = (event) => {
    onSearchText(event.target.value);
  };

  const setVisibality = () => {
    setSearchBarVisible(!searchBarVisible);
    dispatch(paginationUpdate(PAGINATION_LIMIT));
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={ICON_LOGO} alt={LOGO_ICON_ALT_TEXT} />
          <h1 className={style.title}>Todos</h1>
        </div>
        <div className={style.searchBar}>
          {searchBarVisible && (
            <input
              onChange={handleChange}
              autoFocus
              value={searchText}
              className={style.searchField}
            ></input>
          )}
          <img
            onClick={setVisibality}
            src={ICON_SEARCH}
            alt={SEARCH_ICON_ALT_TEXT}
          />
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchText: PropTypes.func.isRequired,
};
export default Navbar;
