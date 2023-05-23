import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actions";
import { ICON_DELETE, DELETE_ICON_ALT_TEXT } from "utils/constant/images";
import { formatDate } from "utils/helpers/formatDate";
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
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={handleDeleteTask}
        />
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
