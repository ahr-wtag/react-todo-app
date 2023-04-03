import React, { useState } from "react";
import style from "./index.module.scss";
import { sanatizeText } from "../../../utils/helpers/sanatizeText";
import { useDispatch } from "react-redux";
import { addTask, createButton } from "../../../store/actions";
import { v1 as uuidv1 } from "uuid";
const AddTaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const storeTask = () => {
    const task = sanatizeText(inputText);
    if (task === "") {
      setError("Please add task description");
      return;
    }
    dispatch(createButton());

    dispatch(
      addTask({
        id: uuidv1(),
        task,
        created: new Date().toLocaleDateString("de-DE"),
        completed: false,
      })
    );
    setInputText("");
  };
  const storeTaskOnEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      storeTask();
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
      <small>{error && error}</small>
      <br />
      <button onClick={storeTask}>Add Task</button>
    </div>
  );
};

export default AddTaskCard;
