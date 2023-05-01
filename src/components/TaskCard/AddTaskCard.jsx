import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTask, searchTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import {
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  KEY_ENTER,
  FILTER_STATE_ALL,
} from "utils/constant";
import { sanitizeText } from "utils/helpers/sanitizeText";
import { showErrorToast, showSuccessToast } from "utils/notification";

const AddTaskCard = ({
  onSearchText,
  isCardCreated,
  onCreateCard,
  setFilter,
}) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSaveButtonClick = () => {
    const task = sanitizeText(inputText);

    if (task === "") {
      showErrorToast("Task Title Can Not Be Empty!");

      return;
    }

    onCreateCard(!isCardCreated);

    dispatch(addTask({ task }));
    dispatch(searchTask(""));
    onSearchText("");
    setInputText(null);
    setFilter(FILTER_STATE_ALL);
    showSuccessToast("Task Created");
  };

  const storeTaskOnEnter = (e) => {
    if (e.key === KEY_ENTER) {
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
        onKeyDown={storeTaskOnEnter}
        className={style.textarea}
      ></textarea>
      <div className={style.actionButtonContainer}>
        <button className={style.button} onClick={handleSaveButtonClick}>
          Add Task
        </button>
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={() => onCreateCard(!isCardCreated)}
        />
      </div>
    </div>
  );
};

AddTaskCard.propTypes = {
  isCardCreated: PropTypes.bool.isRequired,
  onCreateCard: PropTypes.func.isRequired,
  onSearchText: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default AddTaskCard;
