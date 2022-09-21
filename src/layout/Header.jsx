import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;

    border-bottom: 1px solid #ccc;
  `;

  const Container = styled.div`
    width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  `;

  const Logo = styled.div`
    font-size: 1.5rem;
  `;

  const Ul = styled.ul`
    display: flex;
    padding-left: 40px;
    list-style: none;
  `;

  const Li = styled.li`
    padding: 10px;
    a {
      color: #424242;
      text-decoration: none;
    }
  `;

  return (
    <>
      <Nav>
        <Container>
          <Logo>Note</Logo>
          <Ul>
            <Li>
              <Link to="/ship">메뉴1</Link>
            </Li>
            <Li>
              <Link to="/land">메뉴2</Link>
            </Li>
            <Li>
              <Link to="/articles/3">메뉴3</Link>
            </Li>
          </Ul>
        </Container>
      </Nav>
    </>
  );
}
