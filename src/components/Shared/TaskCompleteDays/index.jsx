import React from "react";
import PropTypes from "prop-types";
import "components/Shared/TaskCompleteDays/index.scss";

const TaskCompletedDays = ({ days }) => {
  return (
    <div className="flex align-center justify-center task-completed">
      {`Completed in ${days} ${days > 1 ? "days" : "day"}`}
    </div>
  );
};

TaskCompletedDays.propTypes = {
  days: PropTypes.number.isRequired,
};

export default TaskCompletedDays;
