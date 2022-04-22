const db = require('../models');
const Car = db.car;
const multer = require('multer');
const upload = multer({ dest: '../public/upload' });

exports.getAllCars = (req, res) => {
	Car.findAll().then((result) => {
		res.render('cars_list', {
			data: result,
			title: 'Car Page',
			layout: 'layouts/main-layout',
		});
	});
};

exports.renderCreateCarForm = (req, res) => {
	res.render('cars_add', {
		title: 'Car Add Page',
		layout: 'layouts/main-layout',
	});
};

exports.createNewCar = (req, res) => {
	const body = {
		nama: req.body.nama,
		sewa: req.body.sewa,
		ukuran: req.body.ukuran,
	};

	Car.create(body);

	res.redirect('/cars');
};

exports.renderUpdateCarForm = (req, res) => {
	Car.findByPk(req.params.id).then((result) => {
		res.render('cars_update', {
			id: result.id,
			nama: result.nama,
			sewa: result.sewa,
			title: 'Car Update Page',
			layout: 'layouts/main-layout',
		});
	});
};

exports.updateCar = (req, res) => {
	const updateBody = {
		nama: req.body.nama,
		sewa: req.body.sewa,
		ukuran: req.body.ukuran,
	};

	Car.update(updateBody, { where: { id: req.params.id } });

	res.redirect('/cars');
};

exports.deleteCar = (req, res) => {
	Car.findByPk(req.params.id).then((result) => {
		if (result != null) {
			result.destroy();
			res.redirect('/cars');
		} else {
			res.redirect('/cars');
		}
	});
};
