const mongoose = require('mongoose')

const Schema = mongoose.Schema

const assistanceSchema = new Schema(
	{
		event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
		type: { type: String, required: true },
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{ timestamps: true }
)

assistanceSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Assistance', assistanceSchema)
