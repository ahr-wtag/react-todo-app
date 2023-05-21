import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import TaskList from "components/TaskList";
import "components/TaskBoard/index.scss";

const TaskBoard = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const tasks = useSelector((state) => state.todo);

  function handleCreateTask() {
    setShowCreateCard((showCreateCard) => !showCreateCard);
  }

  return (
    <div className="task-board">
      <h1>Add Task</h1>
      <div>
        <button disabled={showCreateCard} onClick={handleCreateTask}>
          Create
        </button>
      </div>
      <div className="task-board__container">
        {showCreateCard && <AddTaskCard onCreateCard={handleCreateTask} />}
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
