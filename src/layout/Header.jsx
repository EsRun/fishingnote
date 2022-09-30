import { Link, NavLink } from "react-router-dom";
import { Container } from "../components/style/Common";
import {
  Nav,
  Ul,
  Li,
  Logo,
  NavBox,
  activeStyle,
} from "../components/style/HeaderStyle";

export default function Header() {
  return (
    <header>
      <Nav>
        <Container>
          <NavBox>
            <Logo>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Note
              </NavLink>
            </Logo>
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
