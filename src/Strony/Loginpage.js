import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./cssy/auth.css";
import Navbar2 from "../compo/navbar2/Navbar2";
import logo from "../compo/img/logo.png";
function Loginpage() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    email.length > 0 && loginUser(email, password);

    console.log(email);
    console.log(password);
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
        <h5 className="logowanieNapis">Zaloguj się do konta</h5>
        <div className="logowanie">
          <input
            type="email"
            id="form2Example17"
            className="form-control form-control-lg"
            name="email"
          />
          <label className="logowanieNapis" htmlFor="form2Example17">
            Email addres
          </label>
        </div>
        <div className="logowanieNapis">
          <input
            type="password"
            id="form2Example27"
            className="form-control form-control-lg"
            name="password"
          />
          <label className="logowanieNapis" htmlFor="form2Example27">
            Hasło
          </label>
        </div>
        <div className="logouj">
          <button className="logujprzycisk" type="submit">
            Login
          </button>
        </div>
        <a className="logowanieNapis" href="#!">
          Przypomnienie hasła(zrobić)
        </a>
        <div className="doRejestracji">
          <h4>Nie posiadasz konta?</h4>
          <Link to="/rejestracja" className="registerLink">
            Zarejestruj się
          </Link>
        </div>
      </div>

      </div>
      </form>

    </div>
  );
}

export default Loginpage;
