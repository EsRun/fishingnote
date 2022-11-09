import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Boat, Land, Info, Error } from "./pages/";
import Layout from "./layout/Layout";
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
          <Route path="/" element={<Main />}></Route>
          <Route path="info" element={<Info />}></Route>
          <Route path="land" element={<Land />}></Route>
        </Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    </>
  );
}
export default App;
