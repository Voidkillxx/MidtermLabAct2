
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddTaskView from "./components/AddTaskView";
import TaskListView from "./components/TaskListView";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskListView tasks={tasks} deleteTask={deleteTask} />} />
        <Route path="/add" element={<AddTaskView addTask={addTask} />} />
      </Routes>
    </>
  );
};

export default App;
