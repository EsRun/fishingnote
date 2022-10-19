import { useEffect, useState } from "react";
import { Nav, MiddleContent } from "../components/Boat";
import { NavContainer, MiddleContainer } from "../components/style/BoatStyle";
import { Container, Row } from "../components/style/Common";

export default function Info() {
  const [nav, setNav] = useState(1);
  const [location, setLocation] = useState(1);

  useEffect(() => {}, [nav, location]);
  return (
    <Container>
      <Row>
        <NavContainer>
          <Nav setNav={setNav} setLocation={setLocation} />
        </NavContainer>
      </Row>
      <Row>
        <MiddleContainer>
          <MiddleContent Nav={nav} Location={location} />
        </MiddleContainer>
      </Row>
    </Container>
  );
}
