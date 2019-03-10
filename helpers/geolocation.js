exports.locationToLatLong = (obj, locationArg = 'location') => {
	const { coordinates } = obj[locationArg]
	return {
		...obj,
		location: {
			value: coordinates,
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
