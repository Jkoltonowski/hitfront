/** @format */

import './cssy/Machine.css';
import Navbar from '../compo/navbar/Navbar';
import MLA2 from '../compo/zdjMaszyn/MLA/MLA2/studio_articulated_loader_mla_2_25_manitou_002.png';
import MLA3H from '../compo/zdjMaszyn/MLA/MLA3H/studio_articulated_loader_mla_3_25_h_cabin_manitou_004.png';
import MLA4H50 from '../compo/zdjMaszyn/MLA/MLA4H50/studio_articulated_loader_mla_4_50_h_cabin_manitou_004.png';
import MLA550H from '../compo/zdjMaszyn/MLA/MLA550H/studio_articulated_loader_mla_5_50_manitou_002.png';
import MLA665H from '../compo/zdjMaszyn/MLA/MLA665H/main_visual_articulated_loader_mla_6_65_h_z_manitou.png';
import MLA775H from '../compo/zdjMaszyn/MLA/MLA775H/main_visual_articulated_loader_mla_7_75_h_z_manitou.png';
import MLA51675H from '../compo/zdjMaszyn/MLA/MLA51675H/main_visual_articulated_loader_mla_t_516_75_h_manitou.png';
import React from 'react';

const Przegubowe = () => {
	return (
		<div>
			<Navbar />
			<div className='MachineContainer'>
				<div className='maszrol'>
					<img
						src={MLA2}
						alt='MLA2'
						className='MachineImageRol'
					/>
					<h7 className='OpisMaszyn'>MLA 2-25H</h7>
					<div className='Opis'>
						<p>Staty. obciążenie destablilizujące z widłami</p>
						<h5>740 kg</h5>
						<p>Statyczne obciążenie destabilizujące z łyżką</p>
						<h5>1015 kg </h5>
						<p>Max. wysokości punktu obrotu łyżki</p>
						<h5>2736 mm</h5>
						<p>Moc znamionowa silnika</p>
						<h5>24.70 HP</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={MLA3H}
						alt='MLA3H'
						className='MachineImageRol'
					/>
					<h7 className='OpisMaszyn'>MLA 3-25H</h7>
					<div className='Opis'>
						<p>Staty. obciążenie destablilizujące z widłami</p>
						<h5>965 kg</h5>
						<p>Statyczne obciążenie destabilizujące z łyżką</p>
						<h5>1270 kg</h5>
						<p>Max. wysokości punktu obrotu łyżki</p>
						<h5>2836 mm</h5>
						<p>Moc znamionowa silnika</p>
						<h5>24.70 HP</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={MLA4H50}
						alt='MLA4H50'
						className='MachineImageRol'
					/>
					<h7 className='OpisMaszyn'>MLA 4-50H</h7>
					<div className='Opis'>
						<p>Staty. obciążenie destablilizujące z widłami</p>
						<h5>1175 kg</h5>
						<p>Statyczne obciążenie destabilizujące z łyżką</p>
						<h5>1540 kg</h5>
						<p>Max. wysokości punktu obrotu łyżki</p>
						<h5>28.46 mm</h5>
						<p>Moc znamionowa silnika</p>
						<h5>48 HP</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={MLA550H}
						alt='MLA550H'
						className='MachineImageRol'
					/>
					<h7 className='OpisMaszyn'>MLA 5-50H</h7>

					<div className='Opis'>
						<p>Staty. obciążenie destablilizujące z widłami</p>
						<h5>1470 kg</h5>
						<p>Statyczne obciążenie destabilizujące z łyżką</p>
						<h5>1880 kg</h5>
						<p>Max. wysokości punktu obrotu łyżki</p>
						<h5>3070 mm</h5>
						<p>Moc znamionowa silnika</p>
						<h5>48 HP</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={MLA665H}
						alt='MLA665H'
						className='MachineImageRol'
					/>
					<h7 className='OpisMaszyn'>MLA 6-65H-Z</h7>

					<div className='Opis'>
						<p>Staty. obciążenie destablilizujące z widłami</p>
						<h5>2259 kg</h5>
						<p>Statyczne obciążenie destabilizujące z łyżką</p>
						<h5>2907 kg</h5>
						<p>Max. wysokości punktu obrotu łyżki</p>
						<h5>3.32 m</h5>
						<p>Moc znamionowa silnika</p>
						<h5>65 HP</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={MLA775H}
						alt='MLA775H'
						className='MachineImageRol'
					/>
					<h7 className='OpisMaszyn'>MLA 7-75H-Z</h7>
					<div className='Opis'>
						<p>Staty. obciążenie destablilizujące z widłami</p>
						<h5>2741 kg</h5>
						<p>Statyczne obciążenie destabilizujące z łyżką</p>
						<h5>3378 kg</h5>
						<p>Max. wysokości punktu obrotu łyżki</p>
						<h5>3.47 m</h5>
						<p>Moc znamionowa silnika</p>
						<h5>74.30 HP</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={MLA51675H}
						alt='MLA51675H'
						className='MachineImageRol'
					/>
					<h7 className='OpisMaszyn'>MLA 533-145 V+</h7>

					<div className='Opis'>
						<p>Staty. obciążenie destablilizujące z widłami</p>
						<h5>4978 kg</h5>
						<p>Masa z widłami bez ładunku z dachem na 4 słupkach</p>
						<h5>8430 kg</h5>

						<p>Moc znamionowa silnika</p>
						<h5>143 HP</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Przegubowe;
