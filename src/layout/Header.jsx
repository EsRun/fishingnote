import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import Button from "./../components/Button";
import { logout } from "../redux/actions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserName, isLogged } = useSelector((state) => ({
    UserName: state.UserName,
    isLogged: state.isLogged,
  }));

  const Logout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
            <Nav.Link eventKey={2} href="#" onClick={Logout}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
