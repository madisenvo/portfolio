import React from 'react';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const nameArray = ['M','a', 'd', 'i', 's', 'e', 'n', ' ', 'V', 'o', 'g', 'e', 'l']
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <Navbar className="nav">
    <Container>
      <h1 className="name">
      <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
      </h1>
      <Nav className="justify-content-end">
        <Link to="/home" className="nav-link">About Me</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact Me</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header;
