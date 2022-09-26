import styled from "styled-components";

export default function Content() {
  const MiddleContainer = styled.div`
    padding: 20px;
    height: 500px;
    background-color: skyblue;
    border-radius: 5px;
  `;
  return (
    <>
      <MiddleContainer>Middle Component</MiddleContainer>
    </>
  );
}
