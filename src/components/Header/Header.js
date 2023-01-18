import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link as ReactLink} from "react-router-dom";
import './header.css';

export default function Header() {
  return (
    <Navbar className="nav">
    <Container>
      <h1 className="name">Madisen Vogel</h1>
      <Nav className="justify-content-end">
        <ReactLink to="/" className="nav-link">About Me</ReactLink>
        <ReactLink to="/Portfolio" className="nav-link">Portfolio</ReactLink>
        <ReactLink to="/Contact" className="nav-link">Contact Me</ReactLink>
        <ReactLink to="/Resume" className="nav-link">Resume</ReactLink>
      </Nav>
    </Container>
  </Navbar>
  )
}
