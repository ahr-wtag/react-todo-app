import React from "react";
import PropTypes from "prop-types";
import { COMPLETE_ICON_ALT_TEXT, ICON_COMPLETE } from "utils/constant/images";

const CompleteIcon = ({ onClick }) => {
  return (
    <img src={ICON_COMPLETE} alt={COMPLETE_ICON_ALT_TEXT} onClick={onClick} />
  );
};

CompleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CompleteIcon;
