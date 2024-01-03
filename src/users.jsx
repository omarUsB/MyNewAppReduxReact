import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";
import Login from "./login";

export default function Users() {
  const navigate = useNavigate();

  const [reg, setReg] = useState({
    username: "",
    email: "",
    pass: "",
    passtwo: "",
  });
  const style = {
    text: {
      fontFamily: "Fantasy",
      height: "100vh",
    },
    bla: {
      marginTop: "122px",
    },
  };

  const handleUsername = (e) => {
    setReg({ ...reg, username: e.target.value });
  };

  const handleEmail = (e) => {
    setReg({ ...reg, email: e.target.value });
  };

  const handlePass = (e) => {
    setReg({ ...reg, pass: e.target.value });
  };

  const checkingpass = (e) => {
    e.preventDefault();
    if (reg.username === "" || reg.email === "" || reg.pass === "") {
      alert(" tout les champs est obligee");
    } else if (reg.pass === reg.passtwo) {
      alert("Enregistrement Bien ");
      alert('tu es registrer bien ')
      
      navigate("/login",{state:{reg} });
      
    } else {
      alert("Tu veux donner le même mot de passe");
    }
  };

  const handlePasstwo = (e) => {
    setReg({ ...reg, passtwo: e.target.value });
  };

  return (
    <div>
      <div className="container " style={style.text}>
        <div className="row justify-content-center">
          <div className="col-md-6" style={style.bla}>
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h2>Register</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      required
                      onChange={handleUsername}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      required
                      onChange={handlePass}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      required
                      onChange={handlePasstwo}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={checkingpass}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
