import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actions";
import { formatDate } from "utils/helpers/formatDate";
import DeleteIcon from "components/Shared/Image/DeleteIcon";
import "components/TaskCard/index.scss";

const TaskCard = ({ id, taskName, createdDate }) => {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask(id));
  }
  return (
    <div className="task-card">
      <p>{taskName}</p>
      <p>{`Created at: ${formatDate(createdDate)}`}</p>
      <div className="flex align-center justify-between task-card__action-button-container">
        <DeleteIcon action={handleDeleteTask} />
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
};

export default TaskCard;
