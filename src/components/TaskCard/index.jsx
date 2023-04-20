import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "store/actions";
import {
  COMPLETE,
  COMPLETE_ALT,
  DELETE,
  DELETE_ALT,
} from "utils/constant/images";
import { getDateDifference } from "utils/helpers/getDateDifference";
import style from "components/TaskCard/index.module.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";

const TaskCard = ({ id, task, createdTime, completed }) => {
  const [taskCompletedIn, setTaskCompletedIn] = useState(null);

  const TaskText = classNames({
    task: true,
    [style.taskDone]: completed,
  });
  useEffect(() => {
    setTaskCompletedIn(getDateDifference(createdTime));
  }, []);

  const dispatch = useDispatch();

  const completeAction = () => {
    dispatch(completeTask(id));
  };

  return (
    <div className={style.container}>
      <h1 className={TaskText}>{task}</h1>
      <p className={style.dateText}>{`Created at: ${dateFormatter(
        createdTime
      )}`}</p>
      <div className={style.actionButtonContainer}>
        {!completed && (
          <img src={COMPLETE} alt={COMPLETE_ALT} onClick={completeAction} />
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
};
export default TaskCard;
