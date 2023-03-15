import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export function MainNavigation() {
  return (
    <Navbar bg="dark" variant="dark" className="z-3">
      <Container fluid>
        <Navbar.Brand href="#home">JEMC logo</Navbar.Brand>
        <Nav className="me-auto">
          <div className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr className="d-lg-none my-2 text-white-50" />
          </div>
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="#">
            About Church
          </Link>
          <Link className="nav-link" href="#">
            Team
          </Link>
        </Nav>
        <Nav>
          <Button variant="warning">Contact Us</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
