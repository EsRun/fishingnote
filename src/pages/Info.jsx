import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav, MiddleContent } from "../components/Boat";
import { NavContainer, MiddleContainer } from "../components/style/BoatStyle";
import { Container, Row } from "../components/style/Common";

export default function Info() {
  const [nav, setNav] = useState(1);
  const [location, setLocation] = useState(1);

  useEffect(() => {
    console.log("nav= ", nav);
    console.log("location= ", location);
  }, [nav, location]);
  return (
    <Container>
      <Row>
        <NavContainer>
          <Nav setNav={setNav} setLocation={setLocation} />
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
