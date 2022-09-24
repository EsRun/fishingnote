import { Link, NavLink } from "react-router-dom";
import { Container } from "../components/style/Common";
import styled from "styled-components";

export default function Header() {
  const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #67a5e5;
    color: #fff;
    border-bottom: 1px solid #ccc;
  `;

  const NavBox = styled.div`
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Logo = styled.div`
    font-size: 2.4rem;
  `;

  const Ul = styled.ul`
    display: flex;
    padding-left: 40px;
    font-size: 1.6rem;
  `;

  const Li = styled.li`
    padding: 10px;
    a {
      color: #ddd;
    }
  `;

  const activeStyle = {
    color: "#fff",
  };

  return (
    <header>
      <Nav>
        <Container>
          <NavBox>
            <Logo>Note</Logo>
            <Ul>
              <Li>
                <NavLink
                  to="/boat"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  메뉴1
                </NavLink>
              </Li>
              <Li>
                <NavLink
                  to="/land"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  메뉴2
                </NavLink>
              </Li>
              <Li>
                <NavLink
                  to="/articles/3"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  메뉴3
                </NavLink>
              </Li>
            </Ul>
          </NavBox>
        </Container>
      </Nav>
    </header>
  );
}
