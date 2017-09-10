'use strict';

var overpass = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.abrupt('return', new Promise(function (resolve, reject) {
							queryOverpass(query, function (err, data) {
								if (err) {
									reject(err);
									return;
								}

								resolve(data);
							});
						}));

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function overpass(_x) {
		return _ref.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var queryOverpass = require('query-overpass');

module.exports = overpass;
//# sourceMappingURL=overpass.js.map