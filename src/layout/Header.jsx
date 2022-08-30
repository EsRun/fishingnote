import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import Button from "./../components/Button";
import { useSelector } from "react-redux";

const Header = () => {
  const { UserName } = useSelector((state) => ({
    UserName: state.UserName,
  }));
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid="xl">
          <Navbar.Brand>
            <FontAwesomeIcon icon={faFish} size="lg" />
            FishingNote
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">#</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{UserName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
