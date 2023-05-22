import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "store/actions";
import {
  ICON_COMPLETE,
  COMPLETE_ICON_ALT_TEXT,
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
} from "utils/constant/images";
import { getDateDifference } from "utils/helpers/getDateDifference";
import { datePropTypeValidation } from "utils/helpers/datePropTypeValidation";
import { formatDate } from "utils/helpers/formatDate";
import TaskCompletedDays from "components/Shared/TaskCompleteDays";
import "components/TaskCard/index.scss";

const TaskCard = ({ id, taskName, createdDate, completed }) => {
  const taskCompletedIn = getDateDifference(createdDate);
  const dispatch = useDispatch();

  const taskTextStyle = classNames("task-card__task", {
    "task-card__task--done": completed,
  });

  function handleCompleteTask() {
    dispatch(completeTask(id));
  }

  function handleDeleteTask() {
    dispatch(deleteTask(id));
  }

  return (
    <div className="task-card">
      <h1 className={taskTextStyle}>{taskName}</h1>
      <p className="task-card__date">{`Created at: ${formatDate(
        createdDate
      )}`}</p>
      <div className="flex align-center justify-between task-card__action-button-container">
        {!completed && (
          <img
            src={ICON_COMPLETE}
            alt={COMPLETE_ICON_ALT_TEXT}
            onClick={handleCompleteTask}
          />
        )}
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={handleDeleteTask}
        />
      </div>
      {completed && <TaskCompletedDays days={taskCompletedIn} />}
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  createdDate: datePropTypeValidation,
  completed: PropTypes.bool.isRequired,
};

export default TaskCard;
