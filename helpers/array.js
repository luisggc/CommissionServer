Array.prototype.randChunkSplit = function(min, max) {
	let returned = []
	const size = Math.floor(Math.random() * (max + 1)) + min
	for (i = 0; i < size; i++) {
		let random = Math.floor(Math.random() * this.length)
		returned.push(this.splice(random, 1)[0])
	}
	return returned
}
