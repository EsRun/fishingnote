import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #389aff;
  color: #fff;
  border-bottom: 1px solid #ccc;
`;

export const NavBox = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2.4rem;
  a {
    color: #fff;
  }
`;

export const Ul = styled.ul`
  display: flex;
  padding-left: 40px;
  font-size: 1.6rem;
`;

export const Li = styled.li`
  padding: 10px;
  a {
    color: #ddd;
  }
`;

export const activeStyle = {
  color: "#fff",
};
