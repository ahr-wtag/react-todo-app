import React from "react";
import PropTypes from "prop-types";
import Task from "components/TaskCard/Task";

const TaskList = ({ tasks }) => {
  return tasks.map((todo) => <Task key={todo.id} todo={todo} />);
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
