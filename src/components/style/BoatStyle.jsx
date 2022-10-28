import styled from "styled-components";

export const NavContainer = styled.div`
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
  padding: 20px;
  width: 265px;
  height: 320px;
  background-color: #2963853d;
  border-radius: 5px;
  color: #4a4a4a;
  &:hover {
    background-color: #29638585;
  }
`;

export const TitleLine = styled.div`
  padding-bottom: 5px;
  border-bottom: 3px solid #fff;
`;

export const BoxLine = styled.div`
  margin: 20px 0;
  padding: 10px;
  display: flex;
  height: 60%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    //border-bottom: 5px solid skyblue;

    background-color: #1e9eff;
    a {
      color: #fff;
    }
  }

  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const NavItem = styled.span`
  padding: 20px 40px;

  &:hover {
    color: #00b5ff;
    border-bottom: 5px solid skyblue;
  }
`;

export const Select = styled.select`
  ${BoxStyle}
  font-size: 1.6rem;
`;

export const activeStyle = {
  color: "#0090f9",
};

export const selectItemStyle = {
  color: " #00b5ff",
  "border-bottom": "5px solid skyblue",
};
