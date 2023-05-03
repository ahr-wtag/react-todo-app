import React from "react";
import PropTypes from "prop-types";
import { EMPTY_PAGE_ICON_ALT_TEXT, ICON_EMPTY_PAGE } from "utils/constant";
import style from "components/EmptyPage/index.module.scss";

const EmptyPage = ({ isCardCreated, onShowCreateCard }) => {
  function handleIconClick() {
    onShowCreateCard(!isCardCreated);
  }

  return (
    <div className={style.container}>
      <img
        onClick={handleIconClick}
        src={ICON_EMPTY_PAGE}
        alt={EMPTY_PAGE_ICON_ALT_TEXT}
      />
    </div>
  );
};

EmptyPage.propTypes = {
  onShowCreateCard: PropTypes.func.isRequired,
  isCardCreated: PropTypes.bool.isRequired,
};

export default EmptyPage;
