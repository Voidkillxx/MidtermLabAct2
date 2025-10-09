
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Low");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    addTask({ title, desc, priority });
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "500px", backgroundColor: "#f8fff8" }}>
        <h4 className="text-center text-success mb-4">Add New Task</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Select>
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" type="submit">Add Task</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AddTask;
