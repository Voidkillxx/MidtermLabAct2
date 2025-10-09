import React from "react";
import TaskList from "./TaskList";

const TaskListView = ({ tasks, deleteTask }) => {
  return <TaskList tasks={tasks} deleteTask={deleteTask} />;
};

export default TaskListView;