import React from "react";
import PropTypes from "prop-types";
import { EDIT_ICON_ALT_TEXT, ICON_EDIT } from "utils/constant/images";

const EditIcon = ({ action }) => {
  return <img src={ICON_EDIT} alt={EDIT_ICON_ALT_TEXT} onClick={action} />;
};

EditIcon.propTypes = {
  action: PropTypes.func.isRequired,
};

export default EditIcon;
