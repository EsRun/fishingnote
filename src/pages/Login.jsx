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

  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });

  const { password, email, passwordError, emailError } = inputs;

  const { isLogged } = useSelector((state) => ({
    isLogged: state.isLogged,
  }));

  useEffect(() => {
    console.log("Login.jsx= " + isLogged);
    if (isLogged === true) {
      console.log("Login.jsx2= " + isLogged);
      navigate("/");
    }
  }, [isLogged]);

  // 인풋값 변경
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  const handleValidation = (e) => {
    const id = e.target.id;
    console.log("id= ", id);
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      //setemailError("Email Not Valid");
      return false;
    } else {
      //setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      //setpasswordError("Only Letters and length must best min 8 Chracters and Max 22 Chracters");
      return false;
    } else {
      //setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation(e) === true) {
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
                onChange={onChange}
              />
              <small id="emailHelp" className="text-danger form-text">
                "ㅇㅇ"
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-4"
                id="Password"
                placeholder="Password"
                onChange={onChange}
              />
              <small id="passworderror" className="text-danger form-text">
                "ss"
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
