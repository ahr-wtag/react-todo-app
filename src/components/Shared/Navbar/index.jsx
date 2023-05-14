import React from "react";
import "components/Shared/Navbar/index.scss";
import {
  ICON_LOGO,
  LOGO_ICON_ALT_TEXT,
  ICON_SEARCH,
  SEARCH_ICON_ALT_TEXT,
  PAGINATION_LIMIT,
} from "utils/constant";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadingState, paginationLimitUpdate, searchTask } from "store/actions";
import { sanitizeText } from "utils/helpers/sanitizeText";
import { debounce } from "utils/helpers/debouce";

const Navbar = ({ isSearchBarVisible, onSearchBarVisible }) => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(loadingState(true));
    const sanitizedText = sanitizeText(event.target.value);
    handleSearchWithDebounce(sanitizedText);
  };

  const handleSearchInput = (sanitizedText) => {
    dispatch(searchTask(sanitizedText));
    dispatch(loadingState(false));
  };

  const handleSearchWithDebounce = debounce(handleSearchInput);

  const setVisibality = () => {
    onSearchBarVisible(!isSearchBarVisible);
    dispatch(paginationLimitUpdate(PAGINATION_LIMIT));
    dispatch(searchTask(""));
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <img src={ICON_LOGO} alt={LOGO_ICON_ALT_TEXT} />
          <h1 className="navbar__container__title">Todos</h1>
        </div>
        <div className="navbar__search-bar">
          {isSearchBarVisible && (
            <input
              onChange={handleInputChange}
              autoFocus
              className="navbar__search-bar--field"
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
  isSearchBarVisible: PropTypes.bool.isRequired,
  onSearchBarVisible: PropTypes.func.isRequired,
};
export default Navbar;
