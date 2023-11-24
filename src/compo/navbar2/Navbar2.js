import {useContext} from 'react'
import * as jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom'
import React from 'react';
import logo from '../img/logo.png';
import AuthContext from '../../context/AuthContext';
import './navbar2.css'
function Navbar2() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
  }

  return (
    <div className='navbar'>
      <div className='navContainer'>
          <Link
          to='/'
          reloadDocument
          className='logos'
          >
          <div>
            <img
              src={logo}
              alt='logo'
              className='logo'
            />
          </div>
          
        </Link>
          <div className='ainv2'>
            {token === null && 
                <>
						      <a href='/login'>
						      	<button className='b5'>Logowanie</button>{' '}
					      	</a>
                  <a href='/rejestracja'>
						    	  <button className='b5'>Rejestracja</button>{' '}
						      </a>
                </>
                }

              {token !== null && 
                <>
                  <a href='/'>
						    	  <button className='b5'>Strona Główna</button>{' '}
						      </a>

                  <a >
						    	  <button  onClick={logoutUser} className='b5'>Wyloguj</button>{' '}
						      </a>
                </>
                }   

          </div>
      </div>
    </div>
  )
}

export default Navbar2