/** @format */
import React from 'react';
import './cssy/Machine.css';
import Navbar from '../compo/navbar/Navbar';
import ATJ160 from '../compo/zdjMaszyn/ATJ/ATJ160/studio_mewp_160_atj_manitou_002.png';
import ATJ180 from '../compo/zdjMaszyn/ATJ/ATJ180/studio_mewp_180_atj_manitou_004.png';
import ATJ200 from '../compo/zdjMaszyn/ATJ/ATJ200/main_visual_mewp_200_atj_st5_manitou.png';

const Platformy = () => {
	return (
		<div>
			<Navbar />
			<div className='MachineContainer'>
				<div className='maszrol'>
					<img
						src={ATJ160}
						alt='ATJ160'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig platformy</p>
						<h5>230 kg</h5>
						<p>Wysokość robocza</p>
						<h5>16.02 m</h5>
						<p>Wysięg max.</p>
						<h5>8.30 m</h5>
						<p>Ilość osób(wewnątrz)</p>
						<h5>2</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={ATJ180}
						alt='ATJ180'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig platformy</p>
						<h5>230 kg</h5>
						<p>Wysokość robocza</p>
						<h5>18.19 m</h5>
						<p>Wysięg max.</p>
						<h5>10.51 m</h5>
						<p>Ilość osób(wewnątrz)</p>
						<h5>2</h5>
					</div>
				</div>
				<div className='maszrol'>
					<img
						src={ATJ200}
						alt='ATJ200'
						className='MachineImageRol'
					/>
					<div className='Opis'>
						<p>Udźwig platformy</p>
						<h5>230 kg</h5>
						<p>Wysokość robocza</p>
						<h5>20.35 m</h5>
						<p>Wysięg max.</p>
						<h5>12 m</h5>
						<p>Ilość osób(wewnątrz)</p>
						<h5>2</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Platformy;

/*        <div className="maszrol">
          <img src={ATJ170L} alt="ATJ170L" className="MachineImageRol"/>
            <div className="Opis">
            <p>Udźwig platformy</p>
              <h5>200 kg</h5>
              <p>Wysokość robocza</p>
              <h5>16.90 m</h5>
              <p>Wysięg max.</p>
              <h5>9.43 m</h5>
              <p>Ilość osób(wewnątrz)</p>
              <h5>2</h5>
            </div>
        </div>*/
