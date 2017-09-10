const database = require('./lib/database');
const overpass = require('./lib/overpass');

async function gather(bbox) {
	const rules = [
		// sportcomplexes
		`node["sport"]["name"]["leisure"!="pitch"](${bbox});`,
		`way["sport"]["name"]["leisure"!="pitch"](${bbox});`,
		`relation["sport"]["name"]["leisure"!="pitch"](${bbox});`,
		// amenities
		`node["amenity"~"cinema|embassy|hospital|theatre|place_of_worship"]["name"](${bbox});`,
		`way["amenity"~"cinema|embassy|hospital|theatre|place_of_worship"]["name"](${bbox});`,
		`relation["amenity"~"cinema|embassy|hospital|theatre|place_of_worship"]["name"](${bbox});`,
		// academic
		`node["amenity"~"library|school|college"]["name"](${bbox});`,
		`way["amenity"~"library|school|college"]["name"](${bbox});`,
		`relation["amenity"~"library|school|college"]["name"](${bbox});`,
	];

	const query = `
		[out:json][timeout:25];
		(
			${rules.join('\n')}
		);
		out body;
		>;
		out skel qt;
	`;

	const results = await overpass(query);

	return results;
}

module.exports = gather;
