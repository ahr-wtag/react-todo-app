import React from "react";
import PropTypes from "prop-types";
import style from "components/TaskCard/index.module.scss";
const TaskCard = ({ todo }) => {
  const { task, createdTime } = todo;
  return (
    <div className={style.container}>
      <p>{task}</p>
      <p>Created:{createdTime}</p>
    </div>
  );
};
TaskCard.propTypes = {
  todo: PropTypes.object.isRequired,
};
TaskCard.defaultProps = {
  todo: {},
};
export default TaskCard;
