const geolib = require('geolib')

exports.getDistance = (coordinate1, coordinate2) => {
	const geo = geolib.getDistance(
		{ longitude: coordinate1[0], latitude: coordinate1[1] },
		{ longitude: coordinate2[0], latitude: coordinate2[1] }
	)
	return geo
}

exports.locationToLatLong = (obj, locationArg = 'location') => {
	const { coordinates } = obj[locationArg]
	return {
		...obj,
		location: {
			coordinates: coordinates,
			latitude: coordinates[1],
			longitude: coordinates[0]
		}
	}
}

exports.convertLatLongtoDB = (args, locationArg = 'location') => ({
	...args,
	location: {
		coordinates: args[locationArg]
	}
})
