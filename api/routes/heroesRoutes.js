module.exports = (app) => {
	const hero = require('../controllers/heroesController');

	app.route('/heroes')
		.get(hero.list_all_heroes)
		.post(hero.create_a_hero);

	app.route('/heroes/:heroId')
		.get(hero.read_a_hero)
		.put(hero.update_a_hero)
		.delete(hero.delete_a_hero);
};