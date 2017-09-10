import React, { PureComponent } from 'react';
import ReactMapboxGl, { GeoJSONLayer, Layer } from 'react-mapbox-gl';
import turf from 'turf';
import scale from '@turf/transform-scale';
import simplify from '@turf/simplify';
import axios from 'axios';
import { throttle } from 'lodash';

import groningen from '../data/groningen';
import brno from '../data/brno';
import libraries from '../data/libraries';

const Mapbox = ReactMapboxGl({
	accessToken: 'pk.eyJ1IjoiZmFrZXlvdSIsImEiOiJjajViYzFlaWkyM2t5MndxdWExMXp1cWpyIn0.wfzuJDjfReOZi9f_to63bA',
});

export default class Map extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			city: null,
		};

		this.findCity = throttle(this.findCity, 400, { leading: true, trailing: true });
	}

	componentDidMount() {
		this.findCity('groningen');
	}

	componentWillReceiveProps(nextProps) {
		this.findCity(nextProps.term);
	}

	async findCity(term) {
		try {
			const city = await axios.get(`http://localhost:8081/api/search/${term}`);
	
			this.setState({ city: city.data });
		}
		catch (e) {
			console.log(e);
		}
	}

	render() {
		const { className } = this.props;
		const { city } = this.state;

		if (!city || !city.properties) {
			return null;
		}

		const bbox = turf.bbox(city);
		const poly = turf.bboxPolygon([-180, -90, 180, 90]);
		const bounds = turf.bbox(scale(turf.bboxPolygon(bbox), 7));
		const center = turf.center(city).geometry.coordinates;
		
		let mask = null

		try {
			mask = turf.difference(poly, scale(turf.convex(city), 1.3));
		}
		catch (e) {
			console.warn(e);
		}

		// let markers = libraries.features.filter(feature => {
		// 	const intersection = turf.intersect(feature, city);

		// 	return !!intersection;
		// });
		// markers = shuffle(markers);
		// markers = markers.slice(0, 3);
		// markers = turf.featureCollection(markers);

		return (
			<Mapbox
				style="mapbox://styles/fakeyou/cj7df2y1j0o802sno6g0rtp90"
				fitBounds={[[city.bbox[0], city.bbox[1]], [city.bbox[2], city.bbox[3]]]}
				fitBoundsOptions={{ padding: 100 }}
				className={className}
			>
				<GeoJSONLayer
					data={mask}
					fillPaint={{
						"fill-color": "#FFF",
						"fill-opacity": 1,
					}}
				/>
{/* 
				<GeoJSONLayer
					data={markers}
					symbolPaint={{
						"icon-color": "#F00",
					}}
					symbolLayout={{
						"text-field": "{name}",
						"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
						"text-offset": [0, 0.6],
						"text-size": 14,	
						"text-allow-overlap": true,
						"text-ignore-placement": true,
    				"text-anchor": "top",
						"icon-size": 1.5,
						"icon-image": "marker-15",
						"icon-allow-overlap": true,
						"icon-ignore-placement": true,
					}}
				/> */}
			</Mapbox>
		);
	}
}