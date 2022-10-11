import { Outlet } from "react-router-dom";
import { Nav, MiddleContent } from "../components/Boat";
import { NavContainer, MiddleContainer } from "../components/style/BoatStyle";
import { Container, Row } from "../components/style/Common";

export default function Info() {
  return (
    <Container>
      <Row>
        <NavContainer>
          <Nav />
        </NavContainer>
      </Row>
      <Row>
        <MiddleContainer>
          <MiddleContent />
        </MiddleContainer>
      </Row>
    </Container>
  );
}
