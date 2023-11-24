/** @format */

import React from 'react';
import './cssy/Home.css';
import Navbar from '../compo/navbar/Navbar';
import Lista from '../compo/Lista/lista';
import Stopa from '../compo/stopa/Stopa';
import Info from '../compo/oNas/oNas';
import Firma from '../compo/oNas/firma';
import Imgcaro from '../compo/imgcarousel/imgcaro';
import Stopa2 from '../compo/stopa2/Stopa2';
import Mapy from '../compo/map/Map';

function Home() {
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
