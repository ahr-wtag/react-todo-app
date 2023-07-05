import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { paginationLimitUpdate } from "store/actions";
import {
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
  PAGINATION_LIMIT,
} from "utils/constant/form";
import Task from "components/TaskCard/Task";

const TaskList = ({ tasks, limit, filter, setTaskLength, isCardCreated }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const dispatch = useDispatch();

  function getCompletedTasks() {
    return tasks.filter((todo) => todo.completed === true);
  }

  function getIncompletedTasks() {
    return tasks.filter((todo) => todo.completed !== true);
  }

  useEffect(() => {
    switch (filter) {
      case FILTER_STATE_COMPLETE:
        setFilteredTasks(getCompletedTasks());
        break;
      case FILTER_STATE_INCOMPLETE:
        setFilteredTasks(getIncompletedTasks());
        break;
      case FILTER_STATE_ALL:
        setFilteredTasks(tasks);
        break;
    }
  }, [tasks, filter]);

  useEffect(() => {
    setTaskLength(filteredTasks.length);
  }, [filteredTasks]);

  useEffect(() => {
    isCardCreated
      ? dispatch(paginationLimitUpdate(PAGINATION_LIMIT - 1))
      : dispatch(paginationLimitUpdate(PAGINATION_LIMIT));
  }, [filter]);

  const paginatedTasks = filteredTasks.slice(0, limit);
  return paginatedTasks.map((task) => <Task key={task.id} task={task} />);
};

TaskList.propTypes = {
  limit: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setTaskLength: PropTypes.func.isRequired,
  isCardCreated: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};

export default TaskList;
