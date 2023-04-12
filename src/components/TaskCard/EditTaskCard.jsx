import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { editTask, completeTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import { DELETE, DELETE_ALT, ENTER } from "utils/constant";
import { COMPLETE, COMPLETE_ALT } from "utils/constant/images";
const EditTaskCard = ({ id, task, setEditableTask }) => {
  const [inputText, setInputText] = useState(task);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const storeTask = () => {
    const sanatizedTask = sanitizeText(inputText);
    if (sanatizedTask === "") {
      setError("Please add task description");
      return;
    }
    setEditableTask(null);
    dispatch(
      editTask({
        id,
        task: sanatizedTask,
      })
    );
    setInputText(null);
  };

  const cancelAction = () => {
    setEditableTask(null);
  };

  const completeAction = () => {
    storeTask();

    dispatch(completeTask(id));
  };

  const storeTaskOnEnter = (e) => {
    if (e.key === ENTER) {
      e.preventDefault();
      storeTask();
    }
  };

  const sendCursorToEnd = (e) => {
    const inputElement = e.target;
    inputElement.selectionStart = inputElement.value.length;
    inputElement.selectionEnd = inputElement.value.length;
  };

  return (
    <div className={style.container}>
      <textarea
        name="task"
        id="task"
        onChange={handleInputText}
        value={inputText}
        autoFocus
        onFocus={sendCursorToEnd}
        onKeyDown={storeTaskOnEnter}
        className={style.textarea}
      ></textarea>
      <small>{error && error}</small>

      <div className={style.actionButtonContainer}>
        <div>
          <button className={style.button} onClick={storeTask}>
            save
          </button>
        </div>
        <img src={COMPLETE} alt={COMPLETE_ALT} onClick={completeAction} />
        <img src={DELETE} alt={DELETE_ALT} onClick={cancelAction} />
      </div>
    </div>
  );
};

EditTaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  setEditableTask: PropTypes.func.isRequired,
};

export default EditTaskCard;
