import PropTypes from "prop-types";
import React from "react";
import TaskCard from "components/TaskCard";

const TaskList = ({ tasks }) =>
  tasks.map((todo) => (
    <TaskCard
      key={todo.id}
      id={todo.id}
      task={todo.task}
      createdTime={todo.createdTime}
      completed={todo.completed}
    />
  ));

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
