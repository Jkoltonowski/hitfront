/** @format */
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import { scroller } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../Strony/Authentication'
import { FaFacebook } from "react-icons/fa";
import AuthContext from '../../context/AuthContext';
import * as jwt_decode from 'jwt-decode';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

const Navbar = () => {
	//const { update_form_btn,submitLogout } = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState();
	const navigate = useNavigate();
	const navigateToMaszyny = () => {
		navigate('maszyny');
	};	
	const { user, logoutUser } = useContext(AuthContext);
	const token = localStorage.getItem("authTokens");
  
	let decoded;
	if (token) {
	  decoded = jwt_decode(token);
	}
	
	
	return(
		<div className='allnavbar1'>
			{!token ? (

			<div className='navbar'>
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

				<div className='navItems'>
					<nav>
						<ul>
							<button
								className='b1'
								onClick={() =>
									scroller.scrollTo('maszyny', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								Maszyny
							</button>

							<button
								className='b2'
								onClick={() =>
									scroller.scrollTo('firma', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								O nas
							</button>

							<button
								className='b3'
								onClick={() =>
									scroller.scrollTo('oNas', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								Serwis
							</button>
							
							<button
								className='b4'
								onClick={() =>
									scroller.scrollTo('kontakts', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								Kontakt
							</button>
							

							<a href='/sklep'>
								<button className='b5'>Sklep</button>{' '}
							</a>
						</ul>
					</nav>
					<oNas />

	
				</div>
			</div>
			) : (
				<div className='navbar'>
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

				<div className='navItems'>
					<nav>
						<ul>
							<button
								className='b1'
								onClick={() =>
									scroller.scrollTo('maszyny', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								Maszyny
							</button>

							<button
								className='b2'
								onClick={() =>
									scroller.scrollTo('firma', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								O nas
							</button>

							<button
								className='b3'
								onClick={() =>
									scroller.scrollTo('oNas', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								Serwis
							</button>
							
							<button
								className='b4'
								onClick={() =>
									scroller.scrollTo('kontakts', {
										smooth: true,
										offset: -50,
										duration: 500,
									})
								}
							>
								Kontakt
							</button>
							

							<a href='/sklep'>
								<button className='b5'>Sklep</button>{' '}
							</a>
						</ul>
					</nav>
					<oNas />
					<Link to={`/profile/${decoded.user_id}`}><button className='b9'>Profil</button></Link> {/* Dodany przycisk Profil */}
              		<button onClick={logoutUser} className='b9'>Wyloguj</button>

				</div>
			</div>

			)}
		</div>
	);
	
}

export default Navbar;
