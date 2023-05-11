import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actions";
import { ICON_DELETE, DELETE_ICON_ALT_TEXT } from "utils/constant/images";
import "components/TaskCard/index.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";

const TaskCard = ({ id, task, createdTime }) => {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask(id));
  }

  return (
    <div className="task-card">
      <p>{task}</p>
      <p>{`Created at: ${dateFormatter(createdTime)}`}</p>
      <div className="tas-card__action-button-container">
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
  task: PropTypes.string.isRequired,
  createdTime: checkDateString,
};

export default TaskCard;
