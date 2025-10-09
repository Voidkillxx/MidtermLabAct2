
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <style>{`
        .nav-link {
          color: white;
          margin: 0 12px;
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0%;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #eaffea;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <Navbar bg="success" variant="dark" expand="lg" className="px-4">
        <Container fluid>
          <Navbar.Brand className="fw-bold text-white">TaskFlow</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav" className="justify-content-end">
            <Nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/add" className="nav-link">
                Add Task
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
