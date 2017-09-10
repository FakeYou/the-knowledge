'use strict';

var connect = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (connection) {
							_context.next = 5;
							break;
						}

						console.log('Connecting to database at ' + process.env.DATABASE_URL);
						_context.next = 4;
						return mongo.connect(process.env.DATABASE_URL);

					case 4:
						connection = _context.sent;

					case 5:
						return _context.abrupt('return', connection);

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function connect() {
		return _ref.apply(this, arguments);
	};
}();

var collection = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name) {
		var conn;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return connect();

					case 2:
						conn = _context2.sent;
						return _context2.abrupt('return', conn.collection(name));

					case 4:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function collection(_x) {
		return _ref2.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongo = require('mongodb').MongoClient;

var connection = void 0;

function close() {
	if (connection) {
		connection.close();
	}
}

module.exports = {
	connect: connect,
	collection: collection,
	close: close
};
//# sourceMappingURL=database.js.map