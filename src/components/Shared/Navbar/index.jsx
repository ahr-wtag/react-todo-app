import React, { useEffect, useState } from "react";
import style from "components/Shared/Navbar/index.module.scss";
import {
  LOGO,
  ALT_LOGO,
  ICON_SEARCH,
  ALT_SEARCH,
  PAGINATION_LIMIT,
} from "utils/constant";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadingState, paginationUpdate, searchTask } from "store/actions";
import { sanitizeText } from "utils/helpers/sanitizeText";

const Navbar = ({ searchText, setSearchText }) => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
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
          <img src={LOGO} alt={ALT_LOGO} />
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
          <img onClick={setVisibality} src={ICON_SEARCH} alt={ALT_SEARCH} />
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
export default Navbar;
