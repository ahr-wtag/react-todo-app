import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
import TaskList from "components/TaskList";

const TaskBoard = () => {
  const [isCardCreated, setIsCardCreated] = useState(false);
  const tasks = useSelector((state) => state.todo);

  function handleCreateTask() {
    setIsCardCreated(!isCardCreated);
  }

  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div>
        <button disabled={isCardCreated} onClick={handleCreateTask}>
          Create
        </button>
      </div>
      <div className={style.task__board}>
        {isCardCreated && (
          <AddTaskCard isCardCreated onCreateCard={setIsCardCreated} />
        )}
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
