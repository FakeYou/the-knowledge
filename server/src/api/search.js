import { Router } from 'express';
import axios from 'axios';
import querystring from 'querystring';
import { get, chunk } from 'lodash';

import overpass from '../lib/overpass';

export default ({ database }) => {
	const search = Router();

	search.get('/:term', async (req, res) => {
		const { term } = req.params;

		try {
			const query = querystring.stringify({
				api_key: process.env.MAPZEN_TOKEN,
				text: term,
				sources: ['whosonfirst'],
				layers: ['locality'],
			});

			const url = `https://search.mapzen.com/v1/autocomplete?${query}`;
			const result = await axios.get(url);

			const id = get(result.data, 'features[0].properties.id');
			console.log(id);
			const path = chunk(id, 3).map(x => x.join('')).join('/');

			const spelunker = `https://whosonfirst.mapzen.com/data/${path}/${id}.geojson`;
			console.log(spelunker);
			const city = await axios.get(spelunker);

			res.json(city.data);
		}
		catch (e) {
			console.warn(e.message);

			res.status(500).send('Something broke!');
		}

		// const items = await database.collection('features').find({}).toArray();

	});

	return search;
};
