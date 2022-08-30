import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Form } from "react-bootstrap";
import Card from "../components/Content_Card";
import "./../resources/css/Common.css";
import { useSelector, useDispatch } from "react-redux";
import { addSubscriber, removeSubscriber } from "../redux/actions";

const Content_box = styled.div`
  margin-top: 80px;
`;

const Content = () => {
  const [inputs, setInputs] = useState({
    aname: "",
    nickname: "",
    tests: "",
    pl1: "",
    pl2: "",
    s1: "",
    s2: "",
    style: { backgroundColor: "blue" },
  });

  const { aname, nickname, pl1, pl2, s1, s2, tests, style } = inputs;

  const onChange = (e) => {
    const { value, name, tests, dataset, placeholder, style } = e.target;
    console.log(e.target.tests);
    console.log(e.target);
    console.log("dataset.style= " + dataset.style);
    setInputs({
      ...inputs,
      [name]: value, // [aname]: input value
      [dataset.name]: value,
      [dataset.style]: 50,
      //[placeholder]: value,
    });
  };

  const onReset = (e) => {
    setInputs({
      aname: "",
      nickname: "",
      tests: "",
      placeholder: "",
      style: { backgroundColor: "blue" },
    });
  };

  const { count } = useSelector((state) => ({
    count: state.count,
  }));
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addSubscriber());
  };

  return (
    <Content_box>
      <Container fluid="xl">
        <Row className="row_right">
          <div className="mb-4 w-25 row_padding_0">
            <div>{count}</div>
            <button onClick={add}>+</button>
            <button onClick={() => dispatch(removeSubscriber())}>-</button>
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
          <input
            name="aname"
            data-name="pl1"
            data-style="s1"
            placeholder={pl1}
            onChange={onChange}
            value={aname}
            style={{ fontSize: s1 }}
          />
          <input
            name="nickname"
            data-name="pl2"
            data-style="s2"
            placeholder={pl2}
            onChange={onChange}
            value={nickname}
            style={{ fontSize: s2 }}
          />
          <button onClick={onReset}>초기화</button>
          <div>
            <b>값: </b>
            {aname} ({nickname})<br></br>
            <b>pl1: {pl1}</b>
            <br></br>
            <b>pl2: {pl2}</b>
          </div>
        </Row>
      </Container>
    </Content_box>
  );
};

export default Content;
