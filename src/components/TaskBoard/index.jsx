import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
import Pagination from "components/Pagination";
import classNames from "classnames";
import {
  PAGINATION_LIMIT,
  TEXT_SHOW_MORE,
  TEXT_SHOW_LESS,
  ICON_ADD,
  ALT_ADD,
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
} from "utils/constant";
import { paginationUpdate } from "store/actions/";
import TaskList from "components/TaskList";
const TaskBoard = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [filter, setFilter] = useState(FILTER_STATE_ALL);
  const pagination = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);

  const [taskLength, setTaskLength] = useState(tasks.length);

  const filterButtons = [
    { label: "All", filter: FILTER_STATE_ALL },
    { label: "Incomplete", filter: FILTER_STATE_INCOMPLETE },
    { label: "Complete", filter: FILTER_STATE_COMPLETE },
  ];

  useEffect(() => {
    setTaskLength(tasks.length);
  }, [tasks]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showCreateCard) {
      dispatch(paginationUpdate(pagination - 1));
    } else {
      if (pagination != PAGINATION_LIMIT) {
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
          <img className={style.addIcon} src={ICON_ADD} alt={ALT_ADD} />
          Create
        </button>
        <div className={style.filterBar}>
          {filterButtons.map((button) => (
            <button
              key={button.filter}
              onClick={() => setFilter(button.filter)}
              className={classNames({
                [style.filterButton]: true,
                [style.filterButtonActive]: button.filter == filter,
              })}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className={style.taskBoard}>
        {showCreateCard && (
          <AddTaskCard
            showCreateCard
            setShowCreateCard={setShowCreateCard}
            setFilter={setFilter}
          />
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
          {pagination >= taskLength ? TEXT_SHOW_LESS : TEXT_SHOW_MORE}
        </Pagination>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskBoard;
