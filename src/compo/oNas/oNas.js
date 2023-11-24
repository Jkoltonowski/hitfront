/** @format */

import React from 'react';
import './oNas.css';
const oNas = () => {
	return (
		<div
			id='oNas'
			className='opis'
		>
			<div className='opiss'>
				<div className='SerwisLeft'>
					<h2>Usługi</h2>
					<p>Naszym klientom zapewniamy wysokiej jakości usługi serwisowe.</p>
				</div>
				<div className='SeriwisCenter'>
					<h2>Serwis</h2>
					<p>
						Dysponujemy doświadczonym zespołem serwisowym, którego wysokie
						kwalifikacje poparte są wieloma certyfikatami. Serwis wykonujemy na
						miejscu lub u klienta.
					</p>
				</div>
				<div className='SerwisRight'>
					<h2>Oleje</h2>
					<p>
						W ciągłej sprzedaży posiadamy smary i oleje dedykowane do maszyn
						MANITOU. Zapewniają one najlepszą ochronę dla Twojej maszyny
					</p>
				</div>
			</div>
			<div className='opisdwa'>
				<div className='SerwisLeft'>
					<h2>Częśći</h2>
					<p>
						Oferujemy pełną gamę oryginalnych części zamiennych i materiałów
						eksploatacyjnych do maszyn MANITOU zarówno do produkowanych obecnie
						jak również do modeli starszych, których produkcję już zakończono.
					</p>
				</div>
				<div className='SerwisCenter'>
					<h2>Zadowolony</h2>
					<p>
						Używamy nowoczesnych urządzeń diagnostycznych oraz wyłącznie
						oryginalnych części zamiennych co gwarantuje najwyższą jakość usług
						serwisowych. Spełnimy Twoje oczekiwania!
					</p>
				</div>
				<div className='SerwisRight'>
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
