const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 3010;

// #====== Dari mas reza =======
const articlesController = require('./controller/articles.controller.js');
const carsController = require('./controller/cars.controller.js');


// #====== EJS =======
app.set('view engine', 'ejs');

// #====== Express EJS =======
app.use(expressLayouts);

// #====== Middleware =======
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// #====== mas reja =======
// Controller articles
// app.get('/articles', articlesController.findAllArticles);
// app.get('/articles/:id', articlesController.findArticleById);
// app.post('/articles', articlesController.createArticle);
// app.put('/articles/:id', articlesController.updateArticles);
// app.delete('/articles/:id', articlesController.deleteArticles);

// Controller cars
app.get('/cars', carsController.getAllCars);
app.post('/cars', carsController.createNewCar);
app.put('/cars/:id', carsController.updateCar);
app.delete('/cars/:id', carsController.deleteCar);
// #====== xxxxxxx =======

app.get('/', (req, res) => {
	const mahasiswa = [
		{
			nama: 'rafi',
			email: 'rafi@gmail.com',
		},
	];
	res.render('index', {
		nama: 'rafi putra',
		mahasiswa: mahasiswa,
		title: 'Home | Page',
		layout: 'layouts/main-layout',
	});
});

app.get('/cars-add', (req, res) => {
	res.render('cars_add', {
		title: 'Add Cars | Page',
		layout: 'layouts/main-layout',
	});
});

// &---- Page salah ----
app.use('/', (req, res) => {
	res.status(404);
	res.send(/*html*/ ` <h2>Error 404</h2> `);
});

// #====== Listen =======
app.listen(PORT, () => {
	console.log(`Server running at port http://localhost:${PORT}`);
});
