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
import style from "components/TaskCard/index.module.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";
import { showErrorToast, showSuccessToast } from "utils/notification";

const TaskCard = ({ id, task, createdTime, completed, onEditableTask }) => {
  const [taskCompletedIn, setTaskCompletedIn] = useState(null);

  const TaskText = classNames({
    [style.task]: true,
    [style.taskDone]: completed,
  });

  useEffect(() => {
    setTaskCompletedIn(getDateDifference(createdTime));
  }, []);

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    showSuccessToast("Task Completed!");

    dispatch(completeTask(id));
  };

  const handleDeleteClick = () => {
    showErrorToast("Task Deleted!");

    dispatch(deleteTask(id));
  };

  const handleEditClick = () => {
    onEditableTask(id);
  };

  return (
    <div className={style.container}>
      <h1 className={TaskText}>{task}</h1>
      <p className={style.dateText}>{`Created at: ${dateFormatter(
        createdTime
      )}`}</p>

      <div className={style.bottomBar}>
        <div className={style.actionButtonContainer}>
          {!completed && (
            <>
              <img
                src={ICON_COMPLETE}
                alt={COMPLETE_ICON_ALT_TEXT}
                onClick={handleCompleteClick}
              />
              <img
                src={ICON_EDIT}
                alt={EDIT_ICON_ALT_TEXT}
                onClick={handleEditClick}
              />
            </>
          )}
          <img
            src={ICON_DELETE}
            alt={DELETE_ICON_ALT_TEXT}
            onClick={handleDeleteClick}
          />
        </div>
        {completed && (
          <div className={style.completedText}>
            Completed in {taskCompletedIn}{" "}
            {taskCompletedIn > 1 ? "days" : "day"}
          </div>
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
  onEditableTask: PropTypes.func.isRequired,
};

export default TaskCard;
