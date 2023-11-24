/** @format */
/* 
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './Map.css';

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false, // Hides or shows the InfoWindow
		activeMarker: {}, // Shows the active marker upon click
		selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
	};

	render() {
		return (
			<div className='mapa'>
				<Map
					google={this.props.google}
					zoom={14}
					initialCenter={{
						lat: 52.9912142,
						lng: 18.6537203,
					}}
					style={{ width: '400px', height: '300px', border: '1px solid #ccc' }}
				>
					<Marker
						onClick={this.onMarkerClick}
						name={'aa'}
					/>
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
					>
						<div>
							<h4>{this.state.selectedPlace.name}</h4>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCILuBqeockrKD4fuFA-6npvshwvMe5yDI',
})(MapContainer);
*/