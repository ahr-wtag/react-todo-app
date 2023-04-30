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

const TaskCard = ({ id, task, createdTime, completed, onEditableTask }) => {
  const [taskCompletedIn, setTaskCompletedIn] = useState(null);

  const TaskText = classNames({
    task: true,
    [style.taskDone]: completed,
  });
  useEffect(() => {
    setTaskCompletedIn(getDateDifference(createdTime));
  }, []);

  const dispatch = useDispatch();

  const handleCompleteButtonClick = () => {
    dispatch(completeTask(id));
  };

  const handleEditButtonClick = () => {
    onEditableTask(id);
  };

  return (
    <div className={style.container}>
      <h1 className={TaskText}>{task}</h1>
      <p className={style.dateText}>{`Created at: ${dateFormatter(
        createdTime
      )}`}</p>
      <div className={style.actionButtonContainer}>
        {!completed && (
          <>
            <img
              src={ICON_COMPLETE}
              alt={COMPLETE_ICON_ALT_TEXT}
              onClick={handleCompleteButtonClick}
            />
            <img
              src={ICON_EDIT}
              alt={EDIT_ICON_ALT_TEXT}
              onClick={handleEditButtonClick}
            />
          </>
        )}
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={() => dispatch(deleteTask(id))}
        />
      </div>
      {completed && (
        <div className={style.completedText}>
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
  onEditableTask: PropTypes.func.isRequired,
};
export default TaskCard;
