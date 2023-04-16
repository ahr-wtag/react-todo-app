import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
import Pagination from "components/Pagination";
import {
  PAGINATION_LIMIT,
  SHOW_MORE,
  SHOW_LESS,
  ADD,
  ADD_ALT,
  ALL,
  COMPLETE,
  INCOMPLETE,
} from "utils/constant";
import { paginationUpdate } from "store/actions/";
import TaskList from "components/TaskList";
const TaskBoard = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [filter, setFilter] = useState(ALL);
  const pagination = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);

  const [taskLength, setTaskLength] = useState(tasks.length);

  useEffect(() => {
    setTaskLength(tasks.length);
  }, [tasks]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showCreateCard) {
      dispatch(paginationUpdate(pagination - 1));
    } else {
      if (pagination < PAGINATION_LIMIT) {
        dispatch(paginationUpdate(pagination + 1));
      }
    }
  }, [showCreateCard]);

  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div className={style.topBar}>
        <button
          className={style.createButton}
          disabled={showCreateCard}
          onClick={() => setShowCreateCard(!showCreateCard)}
        >
          <img className={style.addIcon} src={ADD} alt={ADD_ALT} />
          Create
        </button>
        <div className={style.filterBar}>
          <button onClick={() => setFilter(ALL)} className={style.filterButton}>
            All
          </button>
          <button
            onClick={() => setFilter(INCOMPLETE)}
            className={style.filterButton}
          >
            Incomplete
          </button>
          <button
            onClick={() => setFilter(COMPLETE)}
            className={style.filterButton}
          >
            Complete
          </button>
        </div>
      </div>
      <div className={style.taskBoard}>
        {showCreateCard && (
          <AddTaskCard showCreateCard setShowCreateCard={setShowCreateCard} />
        )}
        <TaskList
          setTaskLength={setTaskLength}
          filter={filter}
          limit={pagination}
          tasks={tasks}
        ></TaskList>
      </div>

      {taskLength + showCreateCard > PAGINATION_LIMIT ? (
        <Pagination showCreateCard={showCreateCard} taskListLength={taskLength}>
          {pagination >= taskLength ? SHOW_LESS : SHOW_MORE}
        </Pagination>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskBoard;
