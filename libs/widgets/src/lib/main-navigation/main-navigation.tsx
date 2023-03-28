import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from "next/image";
import Link from "next/link";

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
        <Nav>
          <Link
            href="#contacts"
            className="btn-primary btn"
          >
            Напишите нам
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
