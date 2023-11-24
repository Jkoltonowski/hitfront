/** @format */
import React from 'react';
import './cssy/Machine.css';
import Navbar from '../compo/navbar/Navbar';
import M26 from '../compo/zdjMaszyn/M/M26/main_visual_rough_terrain_m_26_2_st5_manitou.png';
import M30 from '../compo/zdjMaszyn/M/M30/main_visual_rough_terrain_m_26_2_st5_manitou (1).png';
import M40 from '../compo/zdjMaszyn/M/M40/main_visual_rough_terrain_m_40_2_st5_manitou.png';
import M50 from '../compo/zdjMaszyn/M/M50/main_visual_rough_terrain_m_40_2_st5_manitou (1).png';
import ME315 from '../compo/zdjMaszyn/M/ME315/studio_electric_forklift_truck_me_315_manitou_001.png';
import ME316 from '../compo/zdjMaszyn/M/ME316/studio_electric_forklift_truck_me_316_manitou_008.png';
import ME318 from '../compo/zdjMaszyn/M/ME318/studio_electric_forklift_truck_me_318_manitou_001.png';
import ME320 from '../compo/zdjMaszyn/M/ME320/studio_electric_forklift_truck_me_320_manitou_001.png';

const Widłowe = () => {
	return (
		<div>
			<Navbar />
			<div className='MachineContainer'>
				<div className='maszrol'>
					<img
						src={M26}
						alt='M26'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>2600 kg</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>500 mm</h5>
						<p>Ilość kół napędzanych</p>
						<h5>2</h5>
						<p>Długość do czoła wideł</p>
						<h5>3501 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={M30}
						alt='M30'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>3000 kg</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>500 mm</h5>
						<p>Ilość kół napędzanych</p>
						<h5>2</h5>
						<p>Długość do czoła wideł</p>
						<h5>3501 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={M40}
						alt='M40'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>4000 kg</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>500 mm</h5>
						<p>Ilość kół napędzanych</p>
						<h5>2</h5>
						<p>Długość do czoła wideł</p>
						<h5>3658 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={M50}
						alt='M50'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>5000 kg</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>600 mm</h5>
						<p>Ilość kół napędzanych</p>
						<h5>2</h5>
						<p>Długość do czoła wideł</p>
						<h5>3748 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={ME315}
						alt='ME315'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>1500 kg</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>500 mm</h5>
						<p>Korytarz roboczy z paletą 800x1200 wzdłuż</p>
						<h5>3262 mm</h5>
						<p>Źródło zasilania</p>
						<h5>Elektryczny</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={ME316}
						alt='ME316'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>1600 kg</h5>
						<p>Max. wysokość podnoszenia</p>
						<h5>6500mm</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>500 mm</h5>
						<p>Źródło zasilania</p>
						<h5>Elektryk</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={ME318}
						alt='ME318'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>1800 kg</h5>
						<p>Max. wysokość podnoszenia</p>
						<h5>6500mm</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>500 mm</h5>
						<p>Korytarz roboczy z paletą 800x1200 wzdłuż</p>
						<h5>3365 mm</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={ME320}
						alt='ME320'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig max.</p>
						<h5>2000 kg</h5>
						<p>Max. wysokość podnoszenia</p>
						<h5>6500mm</h5>
						<p>Środek ciężkości ładunku</p>
						<h5>500 mm</h5>
						<p>Korytarz roboczy z paletą 800x1200 wzdłuż</p>
						<h5>3470 mm</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Widłowe;
