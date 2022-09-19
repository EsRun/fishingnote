import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login, Main, Error } from "./pages/";

function App() {
  useEffect(() => {
    console.log("rendering...");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route default path="/login" element={<Login />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
}
export default App;
