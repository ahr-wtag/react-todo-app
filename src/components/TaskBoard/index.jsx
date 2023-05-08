import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
import TaskList from "components/TaskList";

const TaskBoard = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const tasks = useSelector((state) => state.todo);

  function handleCreateTask() {
    setShowCreateCard(!showCreateCard);
  }

  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div>
        <button disabled={showCreateCard} onClick={handleCreateTask}>
          Create
        </button>
      </div>
      <div className={style.task__board}>
        {showCreateCard && (
          <AddTaskCard isCardCreated onCreateCard={setShowCreateCard} />
        )}
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
