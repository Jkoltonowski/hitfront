import { useContext } from 'react';
import * as jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../img/logo.png';
import AuthContext from '../../context/AuthContext';

function Navbar2() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  let decoded;
  if (token) {
    decoded = jwt_decode(token);
  }

  return (

      <div className='navContainer2'>
        <Link to='/' reloadDocument className='logos2'>
          <img src={logo} alt='logo' className='logo2' />
        </Link>
        <div className='ainv2'>

          {!token ? (
            <>
              <Link to='/'><button className='b9'>Strona Główna</button></Link>
              <Link to='/cart'><button className='b9'>Koszyk</button></Link>
              <Link to='/login'><button className='b9'>Logowanie</button></Link>
              <Link to='/rejestracja'><button className='b9'>Rejestracja</button></Link>
            </>
          ) : (
            <>
              <Link to='/'><button className='b9'>Strona Główna</button></Link>
              <Link to='/cart'><button className='b9'>Koszyk</button></Link>
              <Link to='/sklep/'><button className='b9'>Sklep</button></Link> {/* Dodany przycisk Profil */}
              <button onClick={logoutUser} className='b9'>Wyloguj</button>
            </>
          )}
        </div>
      </div>

  );
}

export default Navbar2;
