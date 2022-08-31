import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const navigate = useNavigate();
  //const [sign, setSign] = useState(false);
  const { sign } = useSelector((state) => ({
    sign: state.isLogged,
  }));

  useEffect(() => {
    console.log("app.js= " + sign);
    if (sign === false) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
export default App;
