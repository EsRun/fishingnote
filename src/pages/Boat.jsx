import { Container, Row } from "../components/style/Common";
import { BoatContainer, MiddleContainer } from "../components/style/BoatStyle";

import { Nav, MiddleContent } from "../components/Boat";

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
