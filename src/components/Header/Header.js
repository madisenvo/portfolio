import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './header.css';

export default function Header() {
  return (
    <Navbar className="nav">
    <Container>
      <h1 className="name">Madisen Vogel</h1>
      <Nav className="justify-content-end">
        <NavLink to="/" className="nav-link">About Me</NavLink>
        <NavLink to="/Portfolio" className="nav-link">Portfolio</NavLink>
        <NavLink to="/Contact" className="nav-link">Contact Me</NavLink>
        <NavLink to="/Resume" className="nav-link">Resume</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}
