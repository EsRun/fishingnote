import { Link } from "react-router-dom";
import { Container } from "../components/style/Common";
import styled from "styled-components";

export default function Header() {
  const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  `;

  const NavBox = styled.div`
    margin: 10px 0;
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
  `;

  return (
    <header>
      <Nav>
        <Container>
          <NavBox>
            <Logo>Note</Logo>
            <Ul>
              <Li>
                <Link to="/boat">메뉴1</Link>
              </Li>
              <Li>
                <Link to="/land">메뉴2</Link>
              </Li>
              <Li>
                <Link to="/articles/3">메뉴3</Link>
              </Li>
            </Ul>
          </NavBox>
        </Container>
      </Nav>
    </header>
  );
}
