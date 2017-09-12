import { Router } from 'express';
import axios from 'axios';
import turf from 'turf';
import { get, chunk } from 'lodash';

import overpass from '../lib/overpass';

export default ({ database }) => {
	const router = Router();

	router.get('/', async (req, res) => {
		const { id } = req.query;

		const dbLocality = await fetchFromDatabase(database, id);

		if (dbLocality) {
			res.json({ ...dbLocality, new: false });
			return;
		}

		const wofLocality = await fetchFromWOF(id);

		if (wofLocality) {
			res.json({ ...wofLocality, new: true });
			await database.collection.insert(wofLocality);
		}
	});

	return router;
};

async function fetchFromDatabase(database, id) {
	try {
		const collection = database.collection('localities');
		const locality = await collection.findOne({ id: parseInt(id, 10) });

		return locality;
	}
	catch (e) {
		console.log(e);
	}

	return null;
}

async function fetchFromWOF(id) {
	try {
		const url = `https://whosonfirst.mapzen.com/data/${path}/${id}.geojson`;
		const locality = await axios.get(url, { timeout: 15000 });
		const props = locality.data.properties || {};
	
		locality.data.properties = {
			name: get(props, 'name:eng_x_preferred[0]') || props['wof:name'],
			country: props['ne:ADM0NAME'] || props['qs:adm0'] || props['qs:a0'],
			countryCode: props['iso:country'],
			latitude: props['geom:latitude'],
			longitude: props['geom:longitude'],
		};

		return locality;
	}
	catch (e) {
		console.log(e);
	}

	return null;
}
