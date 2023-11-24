/** @format */

import React from 'react';
import Mapy from '../map/Map';
import './stop3.css';
const stop3 = () => {
	return (
		<div className='stopa'>
			<div className='kontaktMein'>
				<h1>Kontakt</h1>
				<h4>Czekamy na twoją wiadomość!</h4>
			</div>

			<div className='mapa'>
				<Mapy />
			</div>
		</div>
	);
};
export default stop3;
