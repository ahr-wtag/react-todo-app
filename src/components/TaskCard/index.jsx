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
} from "utils/constant/images";
import { getDateDifference } from "utils/helpers/getDateDifference";
import style from "components/TaskCard/index.module.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";

const TaskCard = ({ id, task, createdTime, completed }) => {
  const [taskCompletedIn, setTaskCompletedIn] = useState(null);

  const TaskText = classNames({
    task: true,
    [style.task__done]: completed,
  });

  useEffect(() => {
    setTaskCompletedIn(getDateDifference(createdTime));
  }, []);

  const dispatch = useDispatch();

  function handleCompleteTask() {
    dispatch(completeTask(id));
  }

  function handleDeleteClick() {
    dispatch(deleteTask(id));
  }

  return (
    <div className={style.container}>
      <h1 className={TaskText}>{task}</h1>
      <p className={style.date__text}>{`Created at: ${dateFormatter(
        createdTime
      )}`}</p>
      <div className={style.action__button__container}>
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
          onClick={handleDeleteClick}
        />
      </div>
      {completed && (
        <div className={style.completed__text}>
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
};

export default TaskCard;
