import TaskCard from "components/TaskCard";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import PropTypes from "prop-types";
import React, { useState } from "react";

const TaskList = ({ tasks, limit }) => {
  const [editableTask, setEditableTask] = useState(null);

  return tasks
    .slice(0, limit)
    .map((todo) =>
      todo.id === editableTask ? (
        <EditTaskCard
          key={todo.id}
          id={todo.id}
          task={todo.task}
          onEditableTask={setEditableTask}
        />
      ) : (
        <TaskCard
          key={todo.id}
          id={todo.id}
          task={todo.task}
          createdTime={todo.createdTime}
          completed={todo.completed}
          onEditableTask={setEditableTask}
        />
      )
    );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
};

export default TaskList;
