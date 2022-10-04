import styled from "styled-components";

export const BoatContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MiddleContainer = styled.div`
  margin-top: 20px;
  border-radius: 5px;
`;

// MiddleContent
export const MiddleBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-size: 1.6rem;
`;

export const Li = styled.li`
  margin-bottom: 20px;
  padding: 30px;
  width: 265px;
  height: 320px;
  background-color: #2963853d;
  border-radius: 5px;
  color: #4a4a4a;
  &:hover {
    background-color: #29638585;
  }
`;

// Nav
export const BoxStyle = {
  padding: "10px 30px",
  border: "2px solid #ccc",
  "border-radius": "5px",
};

export const NavUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  font-size: 1.6rem;
`;

export const NavLi = styled.li`
  // width: ${(props) => props.width};
  padding: 10px 20px;

  &:hover {
    //border-bottom: 5px solid skyblue;
    a {
      color: #1e9eff;
    }
  }

  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const Select = styled.select`
  ${BoxStyle}
  font-size: 1.6rem;
`;

export const activeStyle = {
  color: "#0090f9",
};