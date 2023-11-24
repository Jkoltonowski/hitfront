/** @format */

import './lista.css';
import React from 'react';
import TeleObrotowe from '../zdjMaszyn/lista/studio_rotating_telehandler_mrt_2260_manitou_003.png';
import TeleBud from '../zdjMaszyn/lista/studio_construction_telehandler_mht_790_manitou_004.png';
import TeleRol from '../zdjMaszyn/lista/main_visual_agriculture_telhandler_mlt_733_115_manitou.png';
import LadPrzeg from '../zdjMaszyn/lista/studio_articulated_loader_mla_4_50_h_c_canopy_manitou_003.png';
import PlatformRobo from '../zdjMaszyn/lista/studio_mewp_160_atj_manitou_002.png';
import LogistMagaz from '../zdjMaszyn/lista/studio_pallet_truck_ep_15_lithium_manitou_012.png';
import wozkiWidlowe from '../zdjMaszyn/lista/studio_electric_forklift_truck_me_315_manitou_001.png';
import LadowarkiKompaktowe from '../zdjMaszyn/lista/main_visual_skid_steer_loaders_1050_r_manitou.png';
const lista = () => {
	return (
		<div
			id='maszyny'
			className='List'
		>
			<a href='/maszyny-teleskopowe-budowlane'>
				<div className='MachineItem'>
					<img
						src={TeleBud}
						alt=''
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Ładowarki Teleskopowe Budowlane </h1>
					</div>
				</div>
			</a>
			<a href='/maszyny-teleskopowe-rolnicze'>
				<div className='MachineItem'>
					<img
						src={TeleRol}
						alt='Ładowarki Teleskopower Rolnicze'
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Ładowarki Teleskopowe Rolnicze</h1>
					</div>
				</div>
			</a>
			<a href='/maszyny-teleskopowe-obrotowe'>
				<div className='MachineItem'>
					<img
						src={TeleObrotowe}
						alt=''
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Ładowarki Teleskopowe Obrotowe</h1>
					</div>
				</div>
			</a>
			<a href='/ladowarki-przegubowe'>
				<div className='MachineItem'>
					<img
						src={LadPrzeg}
						alt=''
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Ładowarki Przegubowe</h1>
					</div>
				</div>
			</a>
			<a href='/platformy-robocze'>
				<div className='MachineItem'>
					<img
						src={PlatformRobo}
						alt=''
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Platformy Robocze</h1>
					</div>
				</div>
			</a>
			<a href='/logistyka-magazynowa'>
				<div className='MachineItem'>
					<img
						src={LogistMagaz}
						alt=''
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Logistyka Magazynowa</h1>
					</div>
				</div>
			</a>
			<a href='/wozki-widlowe'>
				<div className='MachineItem'>
					<img
						src={wozkiWidlowe}
						alt=''
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Wózki Widłowe</h1>
					</div>
				</div>
			</a>
			<a href='/ladowarki-kompaktowe'>
				<div className='MachineItem'>
					<img
						src={LadowarkiKompaktowe}
						alt=''
						className='MachineImage'
					/>
					<div className='MachineTitle'>
						<h1>Ładowarki Kompaktowe</h1>
					</div>
				</div>
			</a>
		</div>
	);
};
export default lista;
