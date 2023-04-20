import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import PropTypes from "prop-types";
import { addTask, searchTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import { ICON_DELETE, DELETE_ALT, ENTER } from "utils/constant";
const AddTaskCard = ({ setSearchText, showCreateCard, setShowCreateCard }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSaveButtonClick = () => {
    const task = sanitizeText(inputText);

    if (task === "") {
      setError("Please add task description");

      return;
    }

    setShowCreateCard(!showCreateCard);

    dispatch(
      addTask({
        id: uuidv1(),
        task,
        createdTime: new Date(),
        completed: false,
      })
    );
    dispatch(searchTask(""));
    setSearchText("");
    setInputText(null);
  };

  const handleTaskOnEnter = (e) => {
    if (e.key === ENTER) {
      e.preventDefault();
      handleSaveButtonClick();
    }
  };

  return (
    <div className={style.container}>
      <textarea
        name="task"
        id="task"
        onChange={handleInputText}
        value={inputText}
        autoFocus
        onKeyDown={handleTaskOnEnter}
        className={style.textarea}
      ></textarea>
      <small className={style.error}>{error && error}</small>

      <div className={style.actionButtonContainer}>
        <button className={style.button} onClick={handleSaveButtonClick}>
          Add Task
        </button>
        <img
          src={ICON_DELETE}
          alt={DELETE_ALT}
          onClick={() => setShowCreateCard(!showCreateCard)}
        />
      </div>
    </div>
  );
};

AddTaskCard.propTypes = {
  showCreateCard: PropTypes.bool.isRequired,
  setShowCreateCard: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
export default AddTaskCard;
