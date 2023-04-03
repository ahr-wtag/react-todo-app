import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createButton } from "../../../store/actions";
import TaskBoard from "../TaskBoard";
import style from "./index.module.scss";
const Home = () => {
  const dispatch = useDispatch();
  const createButtonState = useSelector((state) => state.createButton);
  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <button
        disabled={createButtonState}
        onClick={() => dispatch(createButton())}
      >
        Create
      </button>
      <TaskBoard></TaskBoard>
    </div>
  );
};

export default Home;
