import React from "react";
import PropTypes from "prop-types";
import "components/TaskCard/index.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";

const TaskCard = ({ task, createdTime }) => {
  return (
    <div className="task-card">
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
