const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	powerstats: {
		type: Map,
		of: Number,
		required: true
	},
	salary: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Heroes', HeroSchema);