import { Outlet } from "react-router-dom";
import { Nav } from "../components/Boat";
import { NavContainer } from "../components/style/BoatStyle";
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
        <Outlet />
      </Row>
    </Container>
  );
}
