'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	cars = require('../../app/controllers/cars.server.controller');

module.exports = function(app) {
	// Car Routes
	app.route('/cars')
		.get(cars.list)
		.post(users.requiresLogin, cars.create);

	app.route('/search')
		.get(cars.search);
	app.route('/cars/:carId')
		.get(cars.read)
		.put(users.requiresLogin, cars.hasAuthorization, cars.update)
		.delete(users.requiresLogin, cars.hasAuthorization, cars.delete);

	// Finish by binding the car middleware
	app.param('carId', cars.carByID);
	//app.param('carMake', cars.carByMake);
};
