import React from "react";
import PropTypes from "prop-types";
import { DELETE_ICON_ALT_TEXT, ICON_DELETE } from "utils/constant/images";

const DeleteIcon = ({ onClick }) => {
  return <img src={ICON_DELETE} alt={DELETE_ICON_ALT_TEXT} onClick={onClick} />;
};

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteIcon;
