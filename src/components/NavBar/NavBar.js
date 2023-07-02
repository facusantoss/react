import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesBar</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;