import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions";
import styled from "styled-components";
import Button from "../components/Button";

export default function Login() {
  const Container = styled.div`
    width: 480px;
    margin: 0 auto;
  `;

  const LoginBox = styled.div`
    margin-top: 150px;
    padding: 80px 20px;
    border: 2px solid #ccc;
    text-align: center;
    box-sizing: border-box;
  `;

  const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 100px;
  `;

  const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 40px;
  `;
  /*
  const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 0;
    border-radius: 3px;
    background-color: palevioletred;
    color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #f32266;
    }
  `;
*/
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useSelector((state) => ({
    isLogged: state.isLogged,
  }));

  useEffect(() => {
    console.log("Login2.jsx= " + isLogged);

    if (isLogged) navigate("/");
  }, [isLogged]);

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation(e)) {
      dispatch(login());
      console.log("is= " + isLogged);

      navigate("/");
    } else {
      console.log("실패");
    }
  };

  const handleValidation = () => {
    let isValid = false;
    return isValid;
  };

  return (
    <Container>
      <LoginBox>
        <form id="loginform" onSubmit={loginSubmit}>
          <Title>FISHing Note</Title>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <Button type="submit">Login</Button>
        </form>
      </LoginBox>
    </Container>
  );
}
