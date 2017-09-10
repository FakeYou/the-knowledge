'use strict';

var gather = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(bbox) {
		var rules, query, results;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						rules = [
						// sportcomplexes
						'node["sport"]["name"]["leisure"!="pitch"](' + bbox + ');', 'way["sport"]["name"]["leisure"!="pitch"](' + bbox + ');', 'relation["sport"]["name"]["leisure"!="pitch"](' + bbox + ');',
						// amenities
						'node["amenity"~"cinema|embassy|hospital|theatre|place_of_worship"]["name"](' + bbox + ');', 'way["amenity"~"cinema|embassy|hospital|theatre|place_of_worship"]["name"](' + bbox + ');', 'relation["amenity"~"cinema|embassy|hospital|theatre|place_of_worship"]["name"](' + bbox + ');',
						// academic
						'node["amenity"~"library|school|college"]["name"](' + bbox + ');', 'way["amenity"~"library|school|college"]["name"](' + bbox + ');', 'relation["amenity"~"library|school|college"]["name"](' + bbox + ');'];
						query = '\n\t\t[out:json][timeout:25];\n\t\t(\n\t\t\t' + rules.join('\n') + '\n\t\t);\n\t\tout body;\n\t\t>;\n\t\tout skel qt;\n\t';
						_context.next = 4;
						return overpass(query);

					case 4:
						results = _context.sent;
						return _context.abrupt('return', results);

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function gather(_x) {
		return _ref.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var database = require('./lib/database');
var overpass = require('./lib/overpass');

module.exports = gather;
//# sourceMappingURL=overpass.js.map