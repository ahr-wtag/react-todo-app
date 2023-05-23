import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "utils/helpers/formatDate";
import "components/TaskCard/index.scss";

const TaskCard = ({ taskName, createdDate }) => {
  return (
    <div className="task-card">
      <p>{taskName}</p>
      <p>{`Created at: ${formatDate(createdDate)}`}</p>
    </div>
  );
};

TaskCard.propTypes = {
  taskName: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
};

export default TaskCard;
