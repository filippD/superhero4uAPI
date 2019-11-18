const mongoose = require('mongoose');

const Hero = mongoose.model('Heroes');

exports.list_all_heroes = (req, res) => {
	var conditions
	
	if (req.params.category === "fast") {
		conditions = {speed: {$gte: 80}}
	} else if (req.params.category === "powerful") {
		conditions = {power: {$gte: 80}}
	} else if (req.params.category === "strong") {
		conditions = {strength: {$gte: 80}}
	} else if (req.params.category === "intelligent") {
		conditions = {intelligence: {$gte: 80}}
	} else if (req.params.category === "durable") {
		conditions = {durability: {$gte: 80}}	
	} else {
		conditions = {}
	};

	Hero.find(conditions, (err, hero) => {
		if (err)
			res.send(err);
		res.json(hero);
	}).limit(parseInt(req.params.limit)).sort('-power');
};

exports.create_a_hero = (req, res) => {
	const new_hero = new Hero(req.body);
	new_hero.save((err, hero) => {
		if (err)
			res.send(err);
		res.json(hero);
	});
};

exports.read_a_hero = (req, res) => {
	Hero.findById(req.params.heroId, (err, hero) => {
		if (err)
			res.send(err);
		res.json(hero);
	});
};

exports.update_a_hero = (req, res) => {
	Hero.findOneAndUpdate(
		{_id: req.params.heroId},
		req.body, {new: true},
		(err, hero) => {
			if (err)
				res.send(err);
			res.json(hero);
		}
	);
};

exports.delete_a_hero = (req, res) => {
	Hero.remove(
		{ _id: req.params.heroId },
		(err, hero) => {
			if (err)
				res.send(err);
			res.json({message: 'Hero successfully deleted'});
		}
	);
};