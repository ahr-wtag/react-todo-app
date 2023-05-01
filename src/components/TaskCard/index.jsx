import React from "react";
import PropTypes from "prop-types";
import style from "components/TaskCard/index.module.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";

const TaskCard = ({ task, createdTime }) => {
  return (
    <div className={style.container}>
      <p>{task}</p>
      <p>{`Created at: ${dateFormatter(createdTime)}`}</p>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.string.isRequired,
  createdTime: checkDateString,
};

export default TaskCard;
