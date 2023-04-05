import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actions";
import { DELETE, DELETE_ALT } from "utils/constant/images";
import style from "components/TaskCard/index.module.scss";
const TaskCard = ({ todo }) => {
  const { id, task, createdTime } = todo;
  const dispatch = useDispatch();
  const deleteAction = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className={style.container}>
      <p>{task}</p>
      <p>Created:{createdTime}</p>
      <div className={style.actionContainer}>
        <img src={DELETE} alt={DELETE_ALT} onClick={deleteAction} />
      </div>
      <div></div>
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
