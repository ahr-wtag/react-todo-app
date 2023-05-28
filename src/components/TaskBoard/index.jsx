import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import Pagination from "components/Pagination";
import classNames from "classnames";
import {
  PAGINATION_LIMIT,
  TEXT_SHOW_MORE,
  TEXT_SHOW_LESS,
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
} from "utils/constant/form";
import { ICON_ADD, ADD_ICON_ALT_TEXT } from "utils/constant/images";
import { addTask, paginationLimitUpdate } from "store/actions/";
import TaskList from "components/TaskList";
import EmptyPage from "components/EmptyPage";
import "components/TaskBoard/index.scss";

const TaskBoard = () => {
  const [isCreateButtonClicked, setCreateButtonClicked] = useState(false);
  const [filter, setFilter] = useState(FILTER_STATE_ALL);
  const paginationLength = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const [taskLength, setTaskLength] = useState(tasks.length);
  const dispatch = useDispatch();
  const isPaginationButtonVisible =
    taskLength + isCreateButtonClicked > PAGINATION_LIMIT;
  const isTaskListEmpty = Boolean(taskLength + isCreateButtonClicked);

  const filterButtons = [
    { label: "All", filter: FILTER_STATE_ALL },
    { label: "Incomplete", filter: FILTER_STATE_INCOMPLETE },
    { label: "Complete", filter: FILTER_STATE_COMPLETE },
  ];

  useEffect(() => {
    setTaskLength(tasks.length);
  }, [tasks]);

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
      <div className="top-bar">
        <button
          className="top-bar__create-button"
          disabled={isCreateButtonClicked}
          onClick={handleCreateButton}
        >
          <img
            className="top-bar__create-button__icon"
            src={ICON_ADD}
            alt={ADD_ICON_ALT_TEXT}
          />
          Create
        </button>
        <div className="top-bar__filter-bar">
          {filterButtons.map((button) => (
            <button
              key={button.filter}
              onClick={() => setFilter(button.filter)}
              className={classNames({
                "top-bar__filter-bar__button": true,
                "top-bar__filter-bar__button--active": button.filter == filter,
              })}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex wrap task-board__container">
        {isTaskListEmpty || <EmptyPage onIconClick={handleCreateButton} />}
        {isCreateButtonClicked && (
          <AddTaskCard
            onCancelTask={handleCreateButton}
            onCreateTask={handleCreateTask}
            setFilter={setFilter}
          />
        )}
        <TaskList
          setTaskLength={setTaskLength}
          filter={filter}
          limit={paginationLength}
          tasks={tasks}
          isCardCreated={isCreateButtonClicked}
        />
      </div>
      {isPaginationButtonVisible && (
        <Pagination
          isCardCreated={isCreateButtonClicked}
          taskListLength={taskLength}
        >
          {paginationLength >= tasks.length ? TEXT_SHOW_LESS : TEXT_SHOW_MORE}
        </Pagination>
      )}
    </div>
  );
};

export default TaskBoard;
