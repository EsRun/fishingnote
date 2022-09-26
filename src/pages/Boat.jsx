import React from "react";
import { Container, Row } from "../components/style/Common";
import { Nav, Content, BoatContainer } from "../components/Boat";

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
          <Content></Content>
        </Row>
      </Container>
    </>
  );
}
