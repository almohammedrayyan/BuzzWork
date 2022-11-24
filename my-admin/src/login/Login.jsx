import React, { useState } from "react";
// import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/complaint");
    } else {
      alert("Invalid email and password");
    }
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <>
      <section>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="conatiner h-100">
            <div
              className="row d-flex justify-content-center align-items-center h-100"
              style={{
                position: "relative",

                left: "400px",
              }}
            >
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card"
                  style={{
                    borderRadius: "15px",
                    position: "relative",
                    display: "flex",
                    width: "500px",
                  }}
                >
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Login In
                    </h2>
                    <form onSubmit={formSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          name="email"
                          value={input.email}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                          type="email"
                          id="form3Example1cg"
                          className="form-control from-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Enter Your Email
                        </label>
                      </div>
                      <div className="form-outline mb-4 input-field">
                        <input
                          name="password"
                          type={type}
                          value={input.password}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                          id="form3Example1cg"
                          className="form-control from-control-lg"
                        />
                        <span
                          onClick={handleToggle}
                          style={{
                            position: "relative",
                            top: "-32px",
                            cursor: "pointer",
                            left: "93%",
                          }}
                        >
                          <Icon icon={icon} />
                        </span>
                        <label className="form-label" htmlFor="form3Example1cg">
                          Enter Your Password
                        </label>
                      </div>
                      <div>
                        <p>
                          If you have an account {""}
                          <Link
                            to="/register"
                            style={{ textDecoration: "none" }}
                          >
                            Register
                          </Link>
                        </p>
                      </div>
                      <div
                        style={{ marginTop: "10px" }}
                        className="d-flex justify-content-center"
                      >
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
