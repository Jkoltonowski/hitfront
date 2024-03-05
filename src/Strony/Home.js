/** @format */

import React, { useEffect, useState, useContext } from 'react';
import './cssy/Home.css';
import Navbar from '../compo/navbar/Navbar';
import Lista from '../compo/Lista/lista';
import Stopa from '../compo/stopa/Stopa';
import Info from '../compo/oNas/oNas';
import Firma from '../compo/oNas/firma';
import Imgcaro from '../compo/imgcarousel/imgcaro';
import Stopa2 from '../compo/stopa2/Stopa2';
import Mapy from '../compo/map/Map';
import axios from 'axios';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, clearCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
	const dispatch = useDispatch();


    // W komponencie strony głównej (np. Home.js)
	useEffect(() => {
		const checkPaymentStatus = async () => {
			const sessionId = new URLSearchParams(window.location.search).get('session_id');
			if (sessionId) {
				try {
					const response = await axios.get(`/api/success/?session_id=${sessionId}`);
					// Obsługa odpowiedzi
					if (response.data.message === 'Payment successful! Order has been updated.') {
						dispatch(clearCart());
						// Możesz tutaj wyświetlić powiadomienie o sukcesie
					} else {
						// Obsługa nieudanej płatności
					}
				} catch (error) {
					console.error('Error checking payment status:', error);
					// Obsługa błędów
				}
			}
		};

		checkPaymentStatus();
	}, [dispatch]);

	return (
		<div>
			<Navbar />
			<div className='homecont'>
				<Imgcaro />
				<Firma />
				<Info />
				<Lista />
			</div>
			<div className='stopa'>
				<Stopa />
			</div>
			<div className='mapa'></div>
			<div className='stopa2'>
				<Stopa2 />
			</div>
		</div>
	);
}

export default Home;
