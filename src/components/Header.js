import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>TaskFlow</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Task</Link>
      </nav>
    </div>
  );
};

export default Header;
