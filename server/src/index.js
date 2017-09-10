import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import './env';
import Database from './lib/database';
import api from './api';

async function server() {
	const app = express();
	const database = new Database();
	await database.connect();

	app.server = http.createServer(app);

	app.use(cors());
	app.use(morgan('dev'));

	app.use('/api', api({ database }));

	app.server.listen(process.env.API_PORT, () => {
		console.log(`Started api on ${app.server.address().port}`);
	});
}

server();

// const overpass = require('./overpass');
// const database = require('./lib/database');

// async function run() {
// 	try {
// 		const collection = await database.collection('features');

// 		const bbox = [53.1896304621686, 6.535191535949707, 53.20726631073228, 6.557979583740234];
// 		const result = await overpass(bbox);

// 		console.log(`found ${result.features.length} features`);

// 		const promises = result.features.map(feature =>
// 			collection.insert(feature));

// 		await Promise.all(promises);

// 		database.close();
// 	}
// 	catch (e) {
// 		console.error(e);
// 	}
// }

// run();
