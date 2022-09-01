import React from "react";
import { Header, Content } from "./../layout/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const navigate = useNavigate();
  const { sign } = useSelector((state) => ({
    sign: state.isLogged,
  }));

  useEffect(() => {
    console.log("main.js= " + sign);

    // 로그인 상태가 아닐 경우 /login으로 이동
    if (sign === false) navigate("/login");
  }, []);
  return (
    <div>
      <Header></Header>
      <Content></Content>
    </div>
  );
};

export default Main;
