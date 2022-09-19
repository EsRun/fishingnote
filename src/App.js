import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Login, Main, Error } from "./pages/";
=======
import { Login2, Main, Error, Side } from "./pages/";
>>>>>>> 23d562f477fa2cdb0272628ee9bbc8e1122dae5c

function App() {
  useEffect(() => {
    console.log("rendering...");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route default path="/login" element={<Login2 />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
}
export default App;
