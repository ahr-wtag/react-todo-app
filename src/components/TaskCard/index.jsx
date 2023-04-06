import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actions";
import { NIL as NIL_UUID } from "uuid";
import { DELETE, DELETE_ALT } from "utils/constant/images";
import style from "components/TaskCard/index.module.scss";
const TaskCard = ({ id, task, createdTime }) => {
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
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  createdTime: PropTypes.string.isRequired,
};
TaskCard.defaultProps = {
  id: NIL_UUID,
  task: "no Task",
  createdTime: new Date().toLocaleDateString("de-DE"),
};
export default TaskCard;
