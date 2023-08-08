import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SantosBar</Navbar.Brand>
          <Nav className="justify-content-end">
            <NavLink to={"/category/Hamburguesas"} className="nav-link me-2">Hamburguesas</NavLink>
            <NavLink to={"/category/Bebidas"} className="nav-link me-2">Bebidas</NavLink>
            <NavLink to={"/category/Postres"} className="nav-link me-2">Postres</NavLink>
            <NavLink to="/Cart" className="nav-link"><CartWidget /></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;