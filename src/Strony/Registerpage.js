import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import React from "react";
import "./cssy/auth.css";
import logo from "../compo/img/logo.png";

function Registerpage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { registerUser } = useContext(AuthContext);

  console.log(email);
  console.log(username);
  console.log(password);
  console.log(password2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <div className="white">
      <div className="navLogContainer">
        <Link to="/" reloadDocument className="logoLogin">
          <div>
            <img src={logo} alt="logo" className="loginlogo" />
          </div>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>

      <div className="card">
      <div className="container-login">
        <div className="gridlogin"></div>

          <div className="Logowanie"></div>
          <h5 className="logowanieNapis">Zaloguj się</h5>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example17"
              className="form-control form-control-lg"
              placeholder="Email adres"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example17"
              className="form-control form-control-lg"
              placeholder="Nazwa użykownika"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example17"
              className="form-control form-control-lg"
              placeholder="Hasło"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
              placeholder="Powtórz hasło"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="logouj">
            <button className="logujprzycisk" type="submit">
              Rejestracja
            </button>
          </div>
          <p className="logowanieNapis">
            Posiadasz konto?{" "}
            <Link to="/login" >
              Zaloguj
            </Link>
          </p>
          </div>
      </div>
      </form>
      </div>
  );
}

export default Registerpage;
