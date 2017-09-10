'use strict';

require('./env');

console.log('doe dingen!');

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
//# sourceMappingURL=index.js.map