import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { paginationLimitUpdate } from "store/actions";
import Task from "components/TaskCard/Task";
import {
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
  PAGINATION_LIMIT,
} from "utils/constant";

const TaskList = ({ tasks, limit, filter, setTaskLength, isCardCreated }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const searchText = useSelector((state) => state.searchText);

  const dispatch = useDispatch();
  function getCompletedTasks() {
    return tasks
      .filter((todo) => todo.completed == true)
      .filter((task) =>
        task.task.toLowerCase().includes(searchText.toLowerCase())
      );
  }

  function getIncompletedTasks() {
    return tasks
      .filter((todo) => todo.completed !== true)
      .filter((task) =>
        task.task.toLowerCase().includes(searchText.toLowerCase())
      );
  }
  function getAllTasks() {
    return tasks.filter((task) =>
      task.task.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  useEffect(() => {
    switch (filter) {
      case FILTER_STATE_COMPLETE:
        setFilteredTasks(getCompletedTasks);
        break;
      case FILTER_STATE_INCOMPLETE:
        setFilteredTasks(getIncompletedTasks);
        break;
      case FILTER_STATE_ALL:
        setFilteredTasks(getAllTasks);
        break;
    }
  }, [tasks, filter, searchText]);

  useEffect(() => {
    setTaskLength(filteredTasks.length);
  }, [filteredTasks]);

  useEffect(() => {
    isCardCreated
      ? dispatch(paginationLimitUpdate(PAGINATION_LIMIT - 1))
      : dispatch(paginationLimitUpdate(PAGINATION_LIMIT));
  }, [filter]);

  return filteredTasks
    .slice(0, limit)
    .map((todo) => <Task key={todo.id} todo={todo} />);
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setTaskLength: PropTypes.func.isRequired,
  isCardCreated: PropTypes.bool.isRequired,
};

export default TaskList;
