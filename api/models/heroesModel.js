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
	"intelligence": {
		type: Number,
		required: true
	},
	"strength": {
		type: Number,
		required: true
    },
    "speed": {
    	type: Number,
		required: true
    },
    "durability": {
    	type: Number,
		required: true
    },
    "combat": {
    	type: Number,
		required: true
    },
    "power": {
    	type: Number,
		required: true
    },
	salary: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Heroes', HeroSchema);