import React, { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Description:</label>
        <input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>

      <div>
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;


