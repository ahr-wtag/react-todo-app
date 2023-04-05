import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createButton } from "store/actions";
import TaskBoard from "components/TaskBoard/index.jsx";
import style from "pages/Home/index.module.scss";
const Home = () => {
  const dispatch = useDispatch();
  const createButtonState = useSelector((state) => state.createButton);
  const dispatchCreateButton = () => {
    dispatch(createButton());
  };
  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div>
        <button disabled={createButtonState} onClick={dispatchCreateButton}>
          Create
        </button>
      </div>
      <TaskBoard />
    </div>
  );
};

export default Home;
