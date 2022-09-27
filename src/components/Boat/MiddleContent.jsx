import React from "react";
import styled from "styled-components";

export default function MiddleContent() {
  const MiddleDiv = styled.div``;

  const Ul = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.8rem;
  `;

  const Li = styled.li`
    padding: 30px;
    width: 265px;
    height: 320px;
    background-color: #54b1e7;
    color: #fff;
    &:not(:first-child) {
      margin-left: 20px;
    }
  `;
  return (
    <>
      <Ul>
        <Li>
          <strong>제목</strong>
        </Li>
        <Li>
          <strong>제목</strong>
        </Li>
        <Li>
          <strong>제목</strong>
        </Li>
        <Li>
          <strong>제목</strong>
        </Li>
      </Ul>
    </>
  );
}
