import React, { useState } from "react";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { KEY_ENTER } from "utils/constant/form";
import "components/TaskCard/index.scss";

const AddTaskCard = ({ onCreateTask }) => {
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
      <small className="task-card__error">{error && error}</small>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

AddTaskCard.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};

export default AddTaskCard;
