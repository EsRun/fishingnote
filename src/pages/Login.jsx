import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const { isLogged } = useSelector((state) => ({
    isLogged: state.isLogged,
  }));

  useEffect(() => {
    console.log("Login.jsx= " + isLogged);
    if (isLogged === true) navigate(-2);
  }, []);

  const handleValidation = (event) => {
    let formIsValid = true;
    /*
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }
*/
    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation() === true) {
      dispatch(login());
      console.log("is= " + isLogged);

      navigate("/");
    } else {
      console.log("실패");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <div className="text-center">
                <FontAwesomeIcon icon={faFish} size="10x" />
                <h4 className="mt-1 mb-5">Fishing Note</h4>
              </div>
              <input
                type="email"
                className="form-control mb-4"
                id="UserName"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="UserName"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-4"
                id="Password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            <Button type="submit" variant="primary" className="form-control">
              SIGN IN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
