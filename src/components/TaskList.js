
import React, { useState } from "react";
import { Table, Button, Container, Modal } from "react-bootstrap";

const TaskList = ({ tasks, deleteTask }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleDeleteClick = (task) => {
    setSelectedTask(task);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    deleteTask(selectedTask.id);
    setShowDeleteModal(false);
    setSelectedTask(null);
  };

  return (
    <Container className="mt-4">
      <h3 className="text-success mb-3 text-center fw-bold">Task List</h3>
      {tasks.length === 0 ? (
        <p className="text-muted text-center">No tasks yet. Add one!</p>
      ) : (
        <Table bordered hover responsive className="bg-white shadow-sm rounded">
          <thead className="table-success text-center">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.desc}</td>
                <td className="text-center">
                  {task.priority}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="ms-2"
                    style={{
                      transition: "0.3s",
                      backgroundColor:
                        hovered === task.id ? "#dc3545" : "transparent",
                      color: hovered === task.id ? "white" : "#dc3545",
                      borderColor: "#dc3545",
                    }}
                    onMouseEnter={() => setHovered(task.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => handleDeleteClick(task)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            Are you sure you want to delete{" "}
            <strong>{selectedTask?.title}</strong>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TaskList;
