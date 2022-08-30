import { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [sign, setSign] = useState(true);

  return (
    <Provider store={store}>
      <Fragment>{sign ? <Main /> : <Login />}</Fragment>
    </Provider>
  );
}
export default App;
