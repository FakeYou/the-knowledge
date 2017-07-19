import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Mapbox = ReactMapboxGl({
	accessToken: 'pk.eyJ1IjoiZmFrZXlvdSIsImEiOiJjajViYzFlaWkyM2t5MndxdWExMXp1cWpyIn0.wfzuJDjfReOZi9f_to63bA',
});

const Map = props => {
	return (
		<Mapbox
			style="mapbox://styles/mapbox/streets-v9"
			containerStyle={{
				position: 'absolute',
				top: 0,
				height: '100vh',
				width: '100vw',
				zIndex: -1,
			}}
		/>
	)
}

export default Map;
