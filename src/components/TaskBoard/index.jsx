import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
import Pagination from "components/Pagination";
import {
  PAGINATION_LIMIT,
  TEXT_SHOW_MORE,
  TEXT_SHOW_LESS,
} from "utils/constant";
import { paginationLimitUpdate } from "store/actions/";
import TaskList from "components/TaskList";

const TaskBoard = () => {
  const [isCardCreated, setIsCardCreated] = useState(false);
  const paginationLength = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCardCreated) {
      dispatch(paginationLimitUpdate(paginationLength - 1));
    } else {
      if (paginationLength != PAGINATION_LIMIT) {
        dispatch(paginationLimitUpdate(paginationLength + 1));
      }
    }
  }, [isCardCreated]);

  function handleCreateClick() {
    setIsCardCreated(!isCardCreated);
  }

  const isPaginationButtonVisible =
    tasks.length + isCardCreated > PAGINATION_LIMIT;

  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div>
        <button disabled={isCardCreated} onClick={handleCreateClick}>
          Create
        </button>
      </div>
      <div className={style.taskBoard}>
        {isCardCreated && (
          <AddTaskCard isCardCreated onCreateCard={setIsCardCreated} />
        )}
        <TaskList limit={paginationLength} tasks={tasks}></TaskList>
      </div>

      {isPaginationButtonVisible && (
        <Pagination isCardCreated={isCardCreated} taskListLength={tasks.length}>
          {paginationLength >= tasks.length ? TEXT_SHOW_LESS : TEXT_SHOW_MORE}
        </Pagination>
      )}
    </div>
  );
};

export default TaskBoard;
