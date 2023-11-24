/** @format */

import './cssy/Machine.css';
import React from 'react';
import Navbar from '../compo/navbar/Navbar';
import R850 from '../compo/zdjMaszyn/R/850/main_visual_skid_steer_loaders_850_r_manitou.png';
import R1050 from '../compo/zdjMaszyn/R/1050/main_visual_skid_steer_loaders_1050_r_manitou.png';
import R1050RT from '../compo/zdjMaszyn/R/1050RT/main_visual_compact_track_loaders_1050_rt_manitou.png';
import R1350RNXT from '../compo/zdjMaszyn/R/1350RNXT/main_visual_skid_steer_loaders_1350_r_nxt2_manitou.jpg';
import R1350RT from '../compo/zdjMaszyn/R/1350RT/main_visual_compact_track_loaders_1350_rt_manitou (1).png';
import R1650R from '../compo/zdjMaszyn/R/1650R/main_visual_skid_steer_loaders_1650_r_manitou.png';
import R1650RT from '../compo/zdjMaszyn/R/1650RT/main_visual_compact_track_loaders_1650_rt_manitou.png';
import R1850RT from '../compo/zdjMaszyn/R/1850RT/main_visual_compact_track_loaders_1850_rt_manitou.png';
import R1900R from '../compo/zdjMaszyn/R/1900R/main_visual_skid_steer_loaders_1900_r_manitou.png';
import R2100RTNXT from '../compo/zdjMaszyn/R/2100RTNXT/main_visual_compact_track_loaders_2100_rt_nxt3_manitou.png';
import R2150RT from '../compo/zdjMaszyn/R/2150RT/main_visual_compact_track_loaders_2150_rt_manitou.png';
import R2200R from '../compo/zdjMaszyn/R/2200R/main_visual_skid_steer_loaders_2200_r_manitou.png';
import R2600R from '../compo/zdjMaszyn/R/2600R/main_visual_skid_steer_loaders_2600_r_manitou.png';
const Kompaktowe = () => {
	return (
		<div>
			<Navbar />
			<div className='MachineContainer'>
				<div className='maszrol'>
					<img
						src={R850}
						alt='R850'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig roboczy.</p>
						<h5>386 kg</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>3167 mm</h5>
						<p>Zasięg wysypu przy maks. wysokości</p>
						<h5>376 mm</h5>
						<p>Całkowita długość z łyżką</p>
						<h5>2576 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1050}
						alt='R1050'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig roboczy.</p>
						<h5>476 kg</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>3546 mm</h5>
						<p>Zasięg wysypu przy maks. wysokości</p>
						<h5>579 mm</h5>
						<p>Całkowita długość z łyżką</p>
						<h5>2896 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1050RT}
						alt='R1050RT'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Całkowita długość z łyżką</p>
						<h5>2985 mm</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>3650 mm</h5>
						<p>Całkowita długość bez łyżki</p>
						<h5>1290 mm</h5>
						<p>Masa własna</p>
						<h5>1928 Kg</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1350RNXT}
						alt='R1350RNXT'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig roboczy.</p>
						<h5>612 kg</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>3670 mm</h5>
						<p>Zasięg wysypu przy maks. wysokości</p>
						<h5>584 mm</h5>
						<p>Całkowita długość z łyżką</p>
						<h5>3076 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1350RT}
						alt='R1350RT'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Całkowita długość z łyżką</p>
						<h5>3076 mm</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>3670 mm</h5>
						<p>Całkowita szerokość bez łyżki</p>
						<h5>1448 mm</h5>
						<p>Moc maksymalna(kW)</p>
						<h5>34.30 kW</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1650R}
						alt='R1650R'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig roboczy.</p>
						<h5>748 kg</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>3670 mm</h5>
						<p>Zasięg wysypu przy maks. wysokości</p>
						<h5>584 mm</h5>
						<p>Całkowita długość z łyżką</p>
						<h5>3076 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1650RT}
						alt='R1650RT'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Całkowita długość z łyżką</p>
						<h5>3205 mm</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>4008 mm</h5>
						<p>Całkowita szerokość bez łyżki</p>
						<h5>1676 mm</h5>
						<p>Moc maksymalna(kW)</p>
						<h5>51.70 kW</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1850RT}
						alt='R1850RT'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Całkowita długość z łyżką</p>
						<h5>3754 mm</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>4267 mm</h5>
						<p>Całkowita szerokość bez łyżki</p>
						<h5>1636 mm</h5>
						<p>Moc maksymalna(kW)</p>
						<h5>51.70 kW</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R1900R}
						alt='R1900R'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig roboczy.</p>
						<h5>862 kg</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>4013 mm</h5>
						<p>Zasięg wysypu przy maks. wysokości</p>
						<h5>572 mm</h5>
						<p>Całkowita długość z łyżką</p>
						<h5>3226 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R2100RTNXT}
						alt='R2100RTNXT'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Całkowita długość z łyżką</p>
						<h5>3762 mm</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>4267 mm</h5>
						<p>Całkowita szerokość bez łyżki</p>
						<h5>1765 mm</h5>
						<p>Moc maksymalna(kW)</p>
						<h5>53.70 kW</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R2150RT}
						alt='R2150RT'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Całkowita długość z łyżką</p>
						<h5>3769 mm</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>4267 mm</h5>
						<p>Całkowita szerokość bez łyżki</p>
						<h5>1765 mm</h5>
						<p>Moc maksymalna(kW)</p>
						<h5>53.70 kW</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R2200R}
						alt='R2200R'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig roboczy.</p>
						<h5>998 kg</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>4089 mm</h5>
						<p>Zasięg wysypu przy maks. wysokości</p>
						<h5>686 mm</h5>
						<p>Całkowita długość z łyżką</p>
						<h5>3467 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={R2600R}
						alt='R2600R'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig roboczy.</p>
						<h5>1179 kg</h5>
						<p>Całkowita wysokość robocza - pełne podniesienie</p>
						<h5>4089 mm</h5>
						<p>Zasięg wysypu przy maks. wysokości</p>
						<h5>686 mm</h5>
						<p>Całkowita długość z łyżką</p>
						<h5>3632 mm</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Kompaktowe;
