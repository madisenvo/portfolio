import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand to="/">Madisen Vogel</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/" className="nav-link">About Me</NavLink>
        <NavLink to="/Portfolio" className="nav-link">Portfolio</NavLink>
        <NavLink to="/Contact" className="nav-link">Contact Me</NavLink>
        <NavLink to="/Resume" className="nav-link">Resume</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}
