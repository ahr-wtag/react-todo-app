import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { editTask, completeTask } from "store/actions";
import { KEY_ENTER } from "utils/constant/form";
import DeleteIcon from "components/shared/image/DeleteIcon";
import "components/TaskCard/index.scss";
import CompleteIcon from "components/shared/image/CompleteIcon";

const EditTaskCard = ({ id, taskName, onToggleTaskEditing }) => {
  const [inputText, setInputText] = useState(taskName);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleAddTask() {
    const sanitizedTask = sanitizeText(inputText);

    if (sanitizedTask === "") {
      setError("Please add task description");
      return;
    }

    dispatch(
      editTask({
        id,
        task: sanitizedTask,
      })
    );

    onToggleTaskEditing();
  }

  function handleDeleteIconClick() {
    onToggleTaskEditing();
  }

  function handleCompleteTask() {
    handleAddTask();
    dispatch(completeTask(id));
  }

  function storeTaskOnEnter(event) {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      handleAddTask();
    }
  }

  function sendCursorToEnd(event) {
    const inputElement = event.target;
    const { length } = inputElement.value;
    inputElement.setSelectionRange(length, length);
  }

  return (
    <div className="task-card">
      <textarea
        name="task"
        id="task"
        onChange={handleInputChange}
        value={inputText}
        autoFocus
        onFocus={sendCursorToEnd}
        onKeyDown={storeTaskOnEnter}
        className="task-card__textarea"
      ></textarea>
      <small className="task-card__error">{error && error}</small>
      <div className="flex align-center justify-between task-card__action-button-container">
        <button className="task-card__button" onClick={handleAddTask}>
          save
        </button>
        <CompleteIcon onClick={handleCompleteTask} />
        <DeleteIcon onClick={handleDeleteIconClick} />
      </div>
    </div>
  );
};

EditTaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  onToggleTaskEditing: PropTypes.func.isRequired,
};

export default EditTaskCard;
