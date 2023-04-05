import React from "react";
import PropTypes from "prop-types";
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
const TaskCard = ({ todo }) => {
  const { id, task, createdTime, completed } = todo;
  const dispatch = useDispatch();
  const deleteAction = () => {
    dispatch(deleteTask(id));
  };

  const completeAction = () => {
    dispatch(completeTask(id));
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
  todo: PropTypes.object.isRequired,
};
TaskCard.defaultProps = {
  todo: {},
};
export default TaskCard;
