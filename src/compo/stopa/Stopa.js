/** @format */

import React from 'react';
import './Stopa.css';
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const stopa = () => {
	return (
		<div
			id='kontakts'
			className='stopa'
		>
			<div className='kontaktMein'>
				<h1>Kontakt</h1>
				<h4>Czekamy na twoją wiadomość!</h4>
			</div>
			<div className='kontakt'>
				<h3>Gdzie nas znajdziesz</h3>
				<div>
					<a href='https://www.facebook.com/Hitmasz/'>
						<FaFacebook style={{ width: '40px', height: '40px' }}/>
					</a>
				</div>
	
				
				<a href='https://www.google.com/maps/@52.991201,18.6530122,18z'>

				<IoLocationSharp style={{marginTop: '10px', width: '25px', height: '25px' }}/> Łódzka 152a Toruń
				</a>
				
				<h3>Telefon: +48 665 669 755</h3>
				<h3>Email: biuro@hitmasz.pl</h3>			
				<h3> Przedstawiciele handlowi: </h3>
				<h3>Mateusz 665 669 755</h3>
				<h3>Henryk 607 290 300</h3>
				© 2023 Wszelkie prawa zastrzeżone
			</div>
		</div>
	);
};
export default stopa;
