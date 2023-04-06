import React from "react";
import PropTypes from "prop-types";
import style from "components/TaskCard/index.module.scss";
const TaskCard = ({ task, createdTime }) => {
  return (
    <div className={style.container}>
      <p>{task}</p>
      <p>{`Created: ${createdTime}`}</p>
    </div>
  );
};
TaskCard.propTypes = {
  task: PropTypes.string.isRequired,
  createdTime: PropTypes.string.isRequired,
};
TaskCard.defaultProps = {
  task: "no Task",
  createdTime: new Date().toLocaleDateString("de-DE"),
};
export default TaskCard;
