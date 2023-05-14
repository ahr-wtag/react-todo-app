import React from "react";
import PropTypes from "prop-types";
import { EMPTY_PAGE_ICON_ALT_TEXT, ICON_EMPTY_PAGE } from "utils/constant";
import "components/EmptyPage/index.scss";

const EmptyPage = ({ isCardCreated, onShowCreateCard }) => {
  function handleIconClick() {
    onShowCreateCard(!isCardCreated);
  }

  return (
    <div className="empty-page">
      <div className="empty-page__container">
        <img
          className="empty-page__container--icon"
          onClick={handleIconClick}
          src={ICON_EMPTY_PAGE}
          alt={EMPTY_PAGE_ICON_ALT_TEXT}
        />
        <h1 className="empty-page__container--text">
          You didn’t add any task. Please, add one.
        </h1>
      </div>
    </div>
  );
};

EmptyPage.propTypes = {
  onShowCreateCard: PropTypes.func.isRequired,
  isCardCreated: PropTypes.bool.isRequired,
};

export default EmptyPage;
