import React from "react";
import PropTypes from "prop-types";
import style from "components/TaskCard/index.module.scss";
const TaskCard = ({ todo }) => {
  const { task, created } = todo;
  return (
    <div className={style.container}>
      <p>{task}</p>
      <p>Created:{created}</p>
    </div>
  );
};
TaskCard.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TaskCard;
