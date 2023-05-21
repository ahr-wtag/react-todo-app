import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { addTask } from "store/actions/";
import { KEY_ENTER } from "utils/constant/form";
import "components/TaskCard/index.scss";

const AddTaskCard = ({ onCreateCard }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleAddTask() {
    const task = sanitizeText(inputText);

    if (task === "") {
      setError("Please add task description");
      return;
    }

    onCreateCard();
    dispatch(addTask({ task }));
    setInputText(null);
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
        value={inputText}
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
  onCreateCard: PropTypes.func.isRequired,
};

export default AddTaskCard;
