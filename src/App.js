import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login2, Error } from "./pages/";
import Ship from "./pages/Ship";
import Layout from "./layout/Layout";
import Land from "./pages/Land";
import GlobalStyle from "./resources/css/GlobalStyle";

function App() {
  useEffect(() => {
    console.log("rendering...");
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/ship" element={<Ship />} />
          <Route path="/land" element={<Land />} />
        </Route>
        {/* 
      <Route default path="/login" element={<Login2 />}></Route>
      <Route path="/" element={<Main />}>
        <Route path=":id" element={<Main />}></Route>
      </Route>
       */}
        <Route path="/error" element={<Error />}></Route>
        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    </>
  );
}
export default App;
