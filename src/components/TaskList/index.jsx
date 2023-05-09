import Task from "components/TaskCard/Task";
import PropTypes from "prop-types";
import React from "react";

const TaskList = ({ tasks }) => {
  return tasks.map((todo) => <Task key={todo.id} todo={todo} />);
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
