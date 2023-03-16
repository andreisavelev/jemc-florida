import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Image from "next/image";

export function MainNavigation() {
  return (
    <Navbar bg="dark" variant="dark" className="z-3">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/images/Jesus_Embassy_Church_Logo.svg"
            alt="Jesus Embassy Church - Florida"
            width="48"
            height="48"
          />
          Jesus Embassy Church
        </Navbar.Brand>
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
          <Button variant="primary">Contact Us</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
