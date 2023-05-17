import React from "react";
import PropTypes from "prop-types";
import {
  EMPTY_PAGE_ICON_ALT_TEXT,
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  ICON_EMPTY_PAGE,
  MESSAGE_EMPTY_PAGE_ALL,
  MESSAGE_EMPTY_PAGE_COMPLETE,
  MESSAGE_EMPTY_PAGE_INCOMPLETE,
} from "utils/constant";
import "components/EmptyPage/index.scss";

const EmptyPage = ({ isCardCreated, filterState, onShowCreateCard }) => {
  function handleIconClick() {
    onShowCreateCard(!isCardCreated);
  }

  const message =
    filterState === FILTER_STATE_ALL
      ? MESSAGE_EMPTY_PAGE_ALL
      : filterState === FILTER_STATE_COMPLETE
      ? MESSAGE_EMPTY_PAGE_COMPLETE
      : MESSAGE_EMPTY_PAGE_INCOMPLETE;

  return (
    <div className="empty-page">
      <div className="empty-page__container">
        <img
          className="empty-page__container--icon"
          onClick={handleIconClick}
          src={ICON_EMPTY_PAGE}
          alt={EMPTY_PAGE_ICON_ALT_TEXT}
        />
        <h1 className="empty-page__container--text">{message}</h1>
      </div>
    </div>
  );
};

EmptyPage.propTypes = {
  onShowCreateCard: PropTypes.func.isRequired,
  isCardCreated: PropTypes.bool.isRequired,
  filterState: PropTypes.string.isRequired,
};

export default EmptyPage;
