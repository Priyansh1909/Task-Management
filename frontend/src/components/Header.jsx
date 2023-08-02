import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../Css/header.css"

function Header() {
  return (
    <div>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Task Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"} className='link'>Home</Link></Nav.Link>
            <Nav.Link> <Link to={"/Add"} className='link'> Add Task</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header