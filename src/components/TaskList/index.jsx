import TaskCard from "components/TaskCard";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import PropTypes from "prop-types";
import React, { useState } from "react";

const TaskList = ({ tasks }) => {
  const [editableTasks, setEditableTasks] = useState([]);

  return tasks.map((todo) =>
    editableTasks.includes(todo.id) ? (
      <EditTaskCard
        key={todo.id}
        id={todo.id}
        task={todo.task}
        editableTasks={editableTasks}
        onEditableTasks={setEditableTasks}
      />
    ) : (
      <TaskCard
        key={todo.id}
        id={todo.id}
        task={todo.task}
        createdTime={todo.createdTime}
        completed={todo.completed}
        editableTasks={editableTasks}
        onEditableTasks={setEditableTasks}
      />
    )
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
