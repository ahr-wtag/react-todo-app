import React from "react";
import PropTypes from "prop-types";
import { EMPTY_PAGE_ICON_ALT_TEXT, ICON_EMPTY_PAGE } from "utils/constant";
import style from "components/EmptyPage/index.module.scss";
const EmptyPage = ({ showCreateCard, onShowCreateCard }) => {
  return (
    <div className={style.container}>
      <img
        className={style.icon}
        onClick={() => onShowCreateCard(!showCreateCard)}
        src={ICON_EMPTY_PAGE}
        alt={EMPTY_PAGE_ICON_ALT_TEXT}
      />
    </div>
  );
};
EmptyPage.propTypes = {
  onShowCreateCard: PropTypes.func.isRequired,
  showCreateCard: PropTypes.bool.isRequired,
};
export default EmptyPage;
