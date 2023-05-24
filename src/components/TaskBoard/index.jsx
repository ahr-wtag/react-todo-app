import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import Pagination from "components/Pagination";
import {
  PAGINATION_LIMIT,
  TEXT_SHOW_MORE,
  TEXT_SHOW_LESS,
} from "utils/constant/form";
import { paginationLimitUpdate } from "store/actions/";
import TaskList from "components/TaskList";
import { addTask } from "store/actions";
import "components/TaskBoard/index.scss";

const TaskBoard = () => {
  const [isCreateButtonClicked, setCreateButtonClicked] = useState(false);
  const paginationLength = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const isPaginationButtonVisible =
    tasks.length + isCreateButtonClicked > PAGINATION_LIMIT;

  useEffect(() => {
    if (isCreateButtonClicked) {
      dispatch(paginationLimitUpdate(paginationLength - 1));
    } else {
      if (paginationLength != PAGINATION_LIMIT) {
        dispatch(paginationLimitUpdate(paginationLength + 1));
      }
    }
  }, [isCreateButtonClicked]);

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
        <TaskList limit={paginationLength} tasks={tasks} />
      </div>

      {isPaginationButtonVisible && (
        <Pagination
          isCardCreated={isCreateButtonClicked}
          taskListLength={tasks.length}
        >
          {paginationLength >= tasks.length ? TEXT_SHOW_LESS : TEXT_SHOW_MORE}
        </Pagination>
      )}
    </div>
  );
};

export default TaskBoard;
