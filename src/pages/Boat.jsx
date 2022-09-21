import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Select } from "../components/style/Common";
import styled from "styled-components";

export default function Boat() {
  const BoatContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <>
      <Container>
        <Row>
          <BoatContainer>
            <TopComponent />
          </BoatContainer>
        </Row>
        <Row>
          <MiddleComponent></MiddleComponent>
        </Row>
      </Container>
    </>
  );
}

function TopComponent() {
  const BoxStyle = {
    padding: "10px 30px",
    border: "2px solid #ccc",
    "border-radius": "5px",
  };

  const Ul = styled.ul`
    display: flex;
    justify-content: flex-start;
    font-size: 1.6rem;
  `;

  const Li = styled.li`
    // width: ${(props) => props.width};
    ${BoxStyle}
    &:hover {
      border: 2px solid pink;
    }
    &:not(:last-child) {
      margin-right: 50px;
    }
  `;

  const Select = styled.select`
    ${BoxStyle}
  `;
  return (
    <>
      <Ul>
        <Li>
          <Link to="#">선택1</Link>
        </Li>
        <Li>
          <Link to="#">선택2</Link>
        </Li>
        <Li>
          <Link to="#">선택3</Link>
        </Li>
      </Ul>
      <Select>
        <option>진해</option>
        <option>삼천포</option>
        <option>여수</option>
      </Select>
    </>
  );
}

function MiddleComponent() {
  const MiddleContainer = styled.div`
    border: 2px solid #ccc;
    max-height: 500px;
  `;
  return (
    <>
      <MiddleContainer>Middle Component</MiddleContainer>
    </>
  );
}
