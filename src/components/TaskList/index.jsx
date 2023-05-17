import React from "react";
import PropTypes from "prop-types";
import Task from "components/TaskCard/Task";

const TaskList = ({ tasks, limit }) => {
  const paginatedTasks = tasks.slice(0, limit);
  return paginatedTasks.map((todo) => <Task key={todo.id} todo={todo} />);
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
};

export default TaskList;
