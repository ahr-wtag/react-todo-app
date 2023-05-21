import React from "react";
import PropTypes from "prop-types";
import { datePropTypeValidation } from "utils/helpers/datePropTypeValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";
import "components/TaskCard/index.scss";

const TaskCard = ({ taskName, createdDate }) => {
  return (
    <div className="task-card">
      <p>{taskName}</p>
      <p>{`Created at: ${dateFormatter(createdDate)}`}</p>
    </div>
  );
};

TaskCard.propTypes = {
  taskName: PropTypes.string.isRequired,
  createdDate: datePropTypeValidation,
};

export default TaskCard;
