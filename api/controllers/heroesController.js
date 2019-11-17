const mongoose = require('mongoose');

const Hero = mongoose.model('Heroes');

exports.list_all_heroes = (req, res) => {
	Hero.find({}, (err, hero) => {
		if (err)
			res.send(err);
		res.json(hero);
	});
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