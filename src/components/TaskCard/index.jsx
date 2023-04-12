import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask, editButton } from "store/actions";
import {
  COMPLETE,
  COMPLETE_ALT,
  DELETE,
  DELETE_ALT,
  EDIT,
  EDIT_ALT,
} from "utils/constant/images";
import { getDateDifference } from "utils/helpers/getDateDifference";
import style from "components/TaskCard/index.module.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";
import classNames from "classnames";

const TaskCard = ({ id, task, createdTime, completed }) => {
  const [completedDate, setCompletedDate] = useState(null);
  useEffect(() => {
    setCompletedDate(getDateDifference(createdTime));
  }, []);

  const dispatch = useDispatch();

  const deleteAction = () => {
    dispatch(deleteTask(id));
  };

  const completeAction = () => {
    dispatch(completeTask(id));
  };

  const editAction = () => {
    dispatch(editButton(id));
  };

  return (
    <div className={style.container}>
      <h1 className={classNames(style.task, { [style.taskDone]: completed })}>
        {task}
      </h1>
      <p className={style.dateText}>{`Created at: ${dateFormatter(
        createdTime
      )}`}</p>
      <div className={style.actionButtonContainer}>
        {!completed && (
          <>
            <img src={COMPLETE} alt={COMPLETE_ALT} onClick={completeAction} />
            <img src={EDIT} alt={EDIT_ALT} onClick={editAction} />
          </>
        )}
        <img src={DELETE} alt={DELETE_ALT} onClick={deleteAction} />
      </div>
      {completed && (
        <div className={style.completedText}>
          Completed in {completedDate} {completedDate > 1 ? "days" : "day"}
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
