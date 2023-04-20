import TaskCard from "components/TaskCard";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import PropTypes from "prop-types";
import React, { useState } from "react";

const TaskList = ({ tasks }) => {
  const [editableTask, setEditableTask] = useState(null);
  return tasks.map((todo) =>
    todo.id == editableTask ? (
      <EditTaskCard
        key={todo.id}
        id={todo.id}
        task={todo.task}
        setEditableTask={setEditableTask}
      />
    ) : (
      <TaskCard
        key={todo.id}
        id={todo.id}
        task={todo.task}
        createdTime={todo.createdTime}
        completed={todo.completed}
        setEditableTask={setEditableTask}
      />
    )
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
