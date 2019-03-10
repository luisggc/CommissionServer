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

exports.randomGeo = (latitude, longitude, radius) => {
	var y0 = latitude
	var x0 = longitude
	var rd = radius / 111300
	var u = Math.random()
	var v = Math.random()
	var w = rd * Math.sqrt(u)
	var t = 2 * Math.PI * v
	var x = w * Math.cos(t)
	var y = w * Math.sin(t)
	var xp = x / Math.cos(y0)
	return { longitude: y + y0, latitude: xp + x0 }
}
