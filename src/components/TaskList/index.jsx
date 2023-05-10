import React from "react";
import PropTypes from "prop-types";
import Task from "components/TaskCard/Task";

const TaskList = ({ tasks, limit }) => {
  return tasks
    .slice(0, limit)
    .map((todo) => <Task key={todo.id} todo={todo} />);
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
};

export default TaskList;
