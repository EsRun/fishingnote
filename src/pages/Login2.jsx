import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const Container = styled.div`
    width: 760px;
    margin: 0 auto;
  `;

  const LoginBox = styled.div`
    width: 100%;
    margin-top: 150px;
    padding: 20px;
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useSelector((state) => ({
    isLogged: state.isLogged,
  }));

  useEffect(() => {
    console.log("Login.jsx= " + isLogged);
    if (isLogged === true) {
      console.log("Login.jsx2= " + isLogged);
      navigate("/");
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation(e) === false) {
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
