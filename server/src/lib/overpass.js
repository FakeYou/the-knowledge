import overpass from 'query-overpass';

export default async function(query) {
	return new Promise((resolve, reject) => {
		overpass(query, (err, data) => {
			if (err) {
				reject(err);
				return;
			}

			resolve(data);
		});
	});
}
