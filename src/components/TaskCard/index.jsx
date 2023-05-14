import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "store/actions";
import { getDateDifference } from "utils/helpers/getDateDifference";
import "components/TaskCard/index.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";
import { showSuccessToast } from "utils/notification";
import {
  ICON_COMPLETE,
  COMPLETE_ICON_ALT_TEXT,
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  ICON_EDIT,
  EDIT_ICON_ALT_TEXT,
  NOTIFICATION_MESSAGE_COMPLETE_TASK,
  NOTIFICATION_MESSAGE_DELETE_TASK,
} from "utils/constant";

const TaskCard = ({ id, task, createdTime, completed, onEditableTasks }) => {
  const [taskCompletedIn, setTaskCompletedIn] = useState(null);

  const taskTextStyle = classNames({
    "task-card__task": true,
    "task-card__task--done": completed,
  });

  useEffect(() => {
    setTaskCompletedIn(getDateDifference(createdTime));
  }, []);

  const dispatch = useDispatch();

  function handleCompleteTask() {
    showSuccessToast(NOTIFICATION_MESSAGE_COMPLETE_TASK);
    dispatch(completeTask(id));
  }

  function handleDeleteTask() {
    showSuccessToast(NOTIFICATION_MESSAGE_DELETE_TASK);
    dispatch(deleteTask(id));
  }

  function handleEditTask() {
    onEditableTasks(true);
  }

  const completedInText = `Completed in ${taskCompletedIn} ${
    taskCompletedIn > 1 ? "days" : "day"
  }`;

  return (
    <div className="task-card">
      <h1 className={taskTextStyle}>{task}</h1>
      <p className="task-card__date">{`Created at: ${dateFormatter(
        createdTime
      )}`}</p>

      <div className="task-card__bottom-bar">
        <div className="task-card__action-button-container">
          {!completed && (
            <>
              <img
                src={ICON_COMPLETE}
                alt={COMPLETE_ICON_ALT_TEXT}
                onClick={handleCompleteTask}
              />
              <img
                src={ICON_EDIT}
                alt={EDIT_ICON_ALT_TEXT}
                onClick={handleEditTask}
              />
            </>
          )}
          <img
            src={ICON_DELETE}
            alt={DELETE_ICON_ALT_TEXT}
            onClick={handleDeleteTask}
          />
        </div>
        {completed && (
          <div className="task-card__completed">{completedInText}</div>
        )}
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  createdTime: checkDateString,
  completed: PropTypes.bool.isRequired,
  onEditableTasks: PropTypes.func.isRequired,
};

export default TaskCard;
