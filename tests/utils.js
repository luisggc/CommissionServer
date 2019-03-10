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
