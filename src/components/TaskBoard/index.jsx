import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import TaskList from "components/TaskList";
import { addTask } from "store/actions";
import "components/TaskBoard/index.scss";

const TaskBoard = () => {
  const [isCreateButtonClicked, setCreateButtonClicked] = useState(false);
  const tasks = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleCreateButton() {
    setCreateButtonClicked((isCreateButtonClicked) => !isCreateButtonClicked);
  }

  function handleCreateTask(task) {
    handleCreateButton();
    dispatch(addTask({ task }));
  }

  return (
    <div className="task-board">
      <h1>Add Task</h1>
      <div>
        <button disabled={isCreateButtonClicked} onClick={handleCreateButton}>
          Create
        </button>
      </div>
      <div className="flex wrap task-board__container">
        {isCreateButtonClicked && (
          <AddTaskCard
            onCreateTask={handleCreateTask}
            onCancelIconClick={handleCreateButton}
          />
        )}
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
