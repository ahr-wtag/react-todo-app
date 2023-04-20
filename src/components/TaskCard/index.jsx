import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "store/actions";
import {
  ICON_COMPLETE,
  COMPLETE_ALT,
  ICON_DELETE,
  DELETE_ALT,
  ICON_EDIT,
  EDIT_ALT,
} from "utils/constant/images";
import { getDateDifference } from "utils/helpers/getDateDifference";
import style from "components/TaskCard/index.module.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";
import classNames from "classnames";

const TaskCard = ({ id, task, createdTime, completed, setEditableTask }) => {
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
    setEditableTask(id);
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
              alt={COMPLETE_ALT}
              onClick={handleCompleteButtonClick}
            />
            <img
              src={ICON_EDIT}
              alt={EDIT_ALT}
              onClick={handleEditButtonClick}
            />
          </>
        )}
        <img
          src={ICON_DELETE}
          alt={DELETE_ALT}
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
  setEditableTask: PropTypes.func.isRequired,
};
export default TaskCard;
