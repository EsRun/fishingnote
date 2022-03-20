import { Fragment, useState } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const [sign, setSign] = useState(true);
  return <Fragment>{sign ? <Main /> : <Login />}</Fragment>;
}

export default App;
