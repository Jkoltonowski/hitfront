/** @format */

import React from 'react';
import './oNas.css';
import { FaOilCan } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaFaceGrinStars } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
const oNas = () => {
	return (
		<div
			id='oNas'
			className='opis'
		>
			<div className='opiss'>
				<div className='SerwisLeft'>
					<FaPowerOff style={{ width: '40px', height: '40px' }}/>
					<h2>Usługi</h2>
					<p>Naszym klientom zapewniamy wysokiej jakości usługi serwisowe.</p>
				</div>
				<div className='SeriwisCenter'>
					<FaTools style={{ width: '40px', height: '40px' }}/>
					<h2>Serwis</h2>
					<p>
						Dysponujemy doświadczonym zespołem serwisowym, którego wysokie
						kwalifikacje poparte są wieloma certyfikatami. Serwis wykonujemy na
						miejscu lub u klienta.
					</p>
				</div>
				<div className='SerwisRight'>
					<FaOilCan style={{ width: '40px', height: '40px' }}/>
					<h2>Oleje </h2>
					<p>
						W ciągłej sprzedaży posiadamy smary i oleje dedykowane do maszyn
						MANITOU. Zapewniają one najlepszą ochronę dla Twojej maszyny
					</p>
				</div>
			</div>
			<div className='opisdwa'>
				<div className='SerwisLeft'>
					<MdOutlineMiscellaneousServices style={{ width: '40px', height: '40px' }}/>
					<h2>Częśći</h2>
					<p>
						Oferujemy pełną gamę oryginalnych części zamiennych i materiałów
						eksploatacyjnych do maszyn MANITOU zarówno do produkowanych obecnie
						jak również do modeli starszych, których produkcję już zakończono.
					</p>
				</div>
				<div className='SerwisCenter'>
					<FaFaceGrinStars style={{width: '40px', height: '40px' }}/>
					<h2>Zadowolony</h2>
					<p>
						Używamy nowoczesnych urządzeń diagnostycznych oraz wyłącznie
						oryginalnych części zamiennych co gwarantuje najwyższą jakość usług
						serwisowych. Spełnimy Twoje oczekiwania!
					</p>
				</div>
				<div className='SerwisRight'>
					<FaBriefcase style={{ width: '40px', height: '40px' }}/>
					<h2>Praca</h2>
					<p>
						Jesteśmy zainteresowani współpracą z ludźmi, którzy chcą się prężnie
						rozwijać.
					</p>
				</div>
			</div>
		</div>
	);
};

export default oNas;
