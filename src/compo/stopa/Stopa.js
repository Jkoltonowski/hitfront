/** @format */

import React from 'react';
import './Stopa.css';
const stopa = () => {
	return (
		<div
			id='kontakt'
			className='stopa'
		>
			<div className='kontaktMein'>
				<h1>Kontakt</h1>
				<h4>Czekamy na twoją wiadomość!</h4>
			</div>
			<div className='kontakt'>
				<h3>Gdzie nas znajdziesz</h3>
				<a href='https://www.google.com/maps/@52.991201,18.6530122,18z'>
					Toruń, Polska, Łódzka 152a
				</a>
				<h3>Telefon: +48 665 669 755</h3>
				<h3>Email: biuro@hitmasz.pl</h3>
				<a href='https://www.facebook.com/Hitmasz/'>Facebook</a>
				<h3>Przedstawiciele handlowi:</h3>
				<h3>Mateusz 665 669 755</h3>
				<h3>Henryk 607 290 300</h3>
			</div>
		</div>
	);
};
export default stopa;
