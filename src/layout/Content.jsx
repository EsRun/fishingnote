import React from "react";
import styled from "styled-components";
import { Container, Row, Form } from "react-bootstrap";
import Card from "../components/Content_Card";
import "./../resources/css/Common.css";

const Content_box = styled.div`
  margin-top: 80px;
`;

const Content = () => {
  return (
    <Content_box>
      <Container fluid="xl">
        <Row className="row_right">
          <div className="mb-4 w-25 row_padding_0">
            <Form.Select aria-label="Default select example">
              <option value="1">최신순</option>
              <option value="2">거리순</option>
              <option value="3">-</option>
            </Form.Select>
          </div>
        </Row>
        <Row>
          <Card></Card>
        </Row>
        <Row>
          <div>Second Row</div>
        </Row>
      </Container>
    </Content_box>
  );
};

export default Content;
