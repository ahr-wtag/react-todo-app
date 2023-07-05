import React, { useState } from "react";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import DeleteIcon from "components/shared/image/DeleteIcon";
import { KEY_ENTER, FILTER_STATE_ALL } from "utils/constant/form";
import "components/TaskCard/index.scss";

const AddTaskCard = ({ onCreateTask, onCancelTask, setFilter }) => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(null);

  function handleInputChange(event) {
    setTaskName(event.target.value);
  }

  function handleAddTask() {
    const task = sanitizeText(taskName);

    if (task === "") {
      setError("Please add task description");
      return;
    }

    onCreateTask(task);
    setFilter(FILTER_STATE_ALL);
  }

  function storeTaskOnEnter(event) {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      handleAddTask();
    }
  }

  return (
    <div className="task-card">
      <textarea
        name="task"
        id="task"
        onChange={handleInputChange}
        value={taskName}
        autoFocus
        onKeyDown={storeTaskOnEnter}
        className="task-card__textarea"
      ></textarea>
      {error && <small className="task-card__error">{error}</small>}
      <div className="flex align-center justify-between task-card__action-button-container">
        <button className="task-card__button" onClick={handleAddTask}>
          Add Task
        </button>
        <DeleteIcon onClick={onCancelTask} />
      </div>
    </div>
  );
};

AddTaskCard.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
  onCancelTask: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default AddTaskCard;
