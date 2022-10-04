import { Outlet } from "react-router-dom";
import { Nav } from "../components/Boat";
import { BoatContainer } from "../components/style/BoatStyle";
import { Container, Row } from "../components/style/Common";

export default function Info() {
  return (
    <Container>
      <Row>
        <BoatContainer>
          <Nav />
        </BoatContainer>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
}
