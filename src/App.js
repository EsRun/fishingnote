import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login, Main, Side } from "./pages/";

function App() {
  useEffect(() => {
    console.log("rendering...");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route default path="/login" element={<Login />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
export default App;
