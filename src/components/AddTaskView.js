
import React from "react";
import AddTask from "./AddTask";
import { Container } from "react-bootstrap";

const AddTaskView = ({ addTask }) => {
  return (
    <Container className="py-4">
      <AddTask addTask={addTask} />
    </Container>
  );
};

export default AddTaskView;
