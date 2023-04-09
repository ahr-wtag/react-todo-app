import React from "react";
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

const TaskCard = ({ id, task, createdTime, completed }) => {
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
      <h1 className={`${style.task} ${completed ? style.taskDone : ""}`}>
        {task}
      </h1>
      <p className={style.dateText}>Created:{createdTime}</p>
      <div className={style.actionContainer}>
        {!completed ? (
          <>
            <img
              className={style.completeTask}
              src={COMPLETE}
              alt={COMPLETE_ALT}
              onClick={completeAction}
            />
            <img
              className={style.completeTask}
              src={EDIT}
              alt={EDIT_ALT}
              onClick={editAction}
            />
          </>
        ) : (
          <></>
        )}
        <img
          src={DELETE}
          className={style.deleteTask}
          alt={DELETE_ALT}
          onClick={deleteAction}
        />
      </div>
      {completed && (
        <div className={style.completedText}>
          Completed in {getDateDifference(createdTime)} days
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
