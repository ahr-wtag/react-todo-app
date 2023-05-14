import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTask, searchTask } from "store/actions/";
import "components/TaskCard/index.scss";
import {
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  KEY_ENTER,
  FILTER_STATE_ALL,
} from "utils/constant";
import { sanitizeText } from "utils/helpers/sanitizeText";

const AddTaskCard = ({
  onSearchBarVisible,
  isCardCreated,
  onCreateCard,
  onFilterState,
}) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function onSave() {
    const task = sanitizeText(inputText);

    if (task === "") {
      setError("Please add task description");

      return;
    }

    onCreateCard(!isCardCreated);

    dispatch(addTask({ task }));
    dispatch(searchTask(""));
    onSearchBarVisible(false);
    setInputText(null);
    onFilterState(FILTER_STATE_ALL);
  }

  function storeTaskOnEnter(event) {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      onSave();
    }
  }

  function handleDeleteTask() {
    onCreateCard(!isCardCreated);
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

      <div className="task-card__action-button-container">
        <button className="task-card__button" onClick={onSave}>
          Add Task
        </button>
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={handleDeleteTask}
        />
      </div>
    </div>
  );
};

AddTaskCard.propTypes = {
  isCardCreated: PropTypes.bool.isRequired,
  onCreateCard: PropTypes.func.isRequired,
  onSearchBarVisible: PropTypes.func.isRequired,
  onFilterState: PropTypes.func.isRequired,
};

export default AddTaskCard;
