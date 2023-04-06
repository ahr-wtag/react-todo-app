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
import { NIL as NIL_UUID } from "uuid";
import { getDateDifference } from "utils/helpers/getDateDifference";
import style from "components/TaskCard/index.module.scss";
const TaskCard = ({ id, task, createdTime, completed }) => {
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
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  createdTime: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
TaskCard.defaultProps = {
  id: NIL_UUID,
  task: "no Task",
  createdTime: new Date().toLocaleDateString("de-DE"),
  completed: false,
};
export default TaskCard;
