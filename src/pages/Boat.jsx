import React from "react";
import { Container, Row } from "../components/style/Common";
import {
  Nav,
  MiddleContainer,
  BoatContainer,
  MiddleContent,
} from "../components/Boat";

export default function Boat() {
  return (
    <>
      <Container>
        <Row>
          <BoatContainer>
            <Nav />
          </BoatContainer>
        </Row>
        <Row>
          <MiddleContainer>
            <MiddleContent />
          </MiddleContainer>
        </Row>
      </Container>
    </>
  );
}
