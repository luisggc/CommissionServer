const dateToString = date => new Date(date).toISOString()

exports.dateFormation = obj => {
	let { createdAt, updatedAt, eventDate } = obj
	return {
		...obj,
		eventDate: dateToString(eventDate),
		updatedAt: dateToString(updatedAt),
		createdAt: dateToString(createdAt)
	}
}
