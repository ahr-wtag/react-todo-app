import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "store/actions";
import {
  ICON_COMPLETE,
  COMPLETE_ICON_ALT_TEXT,
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  ICON_EDIT,
  EDIT_ICON_ALT_TEXT,
} from "utils/constant/images";
import { getDateDifference } from "utils/helpers/getDateDifference";
import "components/TaskCard/index.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";

const TaskCard = ({ id, task, createdTime, completed, onEditableTasks }) => {
  const [taskCompletedIn, setTaskCompletedIn] = useState(null);

  const TaskText = classNames({
    "task-card__task": true,
    "task-card__task--done": completed,
  });

  useEffect(() => {
    setTaskCompletedIn(getDateDifference(createdTime));
  }, []);

  const dispatch = useDispatch();

  function handleCompleteTask() {
    dispatch(completeTask(id));
  }

  function handleDeleteTask() {
    dispatch(deleteTask(id));
  }

  function handleEditTask() {
    onEditableTasks(true);
  }

  return (
    <div className="task-card">
      <h1 className={TaskText}>{task}</h1>
      <p className="task-card__date">{`Created at: ${dateFormatter(
        createdTime
      )}`}</p>
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
        <div className="task-card__completed">
          Completed in {taskCompletedIn} {taskCompletedIn > 1 ? "days" : "day"}
        </div>
      )}
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
