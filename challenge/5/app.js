const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// const formidable = require('express-formidable');
const app = express();
const PORT = 3010;

// #====== Dari mas reza =======
// const articlesController = require('./controller/articles.controller.js');
const carsController = require('./controller/cars.controller.js');

// #====== EJS =======
app.set('view engine', 'ejs');

app.use(express.json());

// TODO
// app.use(
// 	formidable({
// 		uploadDir: 'uploads',
// 	})
// );

// #====== Express EJS =======
app.use(expressLayouts);

// #====== Middleware =======
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



// &---- Default page ----
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Home Page',
		layout: 'layouts/main-layout',
	});
});

// &---- Controller cars ---- 
// Render view
app.get('/cars', carsController.getAllCars);
app.get('/cars/add', carsController.renderCreateCarForm);
app.get('/cars/update/:id', carsController.renderUpdateCarForm);

// Endpoint logic
app.post('/cars', carsController.createNewCar);
app.post('/cars/:id', carsController.updateCar);
app.get('/cars/:id', carsController.deleteCar);
// #====== xxxxxxx =======



// &---- Page salah ----
app.use('/', (req, res) => {
	res.status(404);
	res.send(/*html*/ ` <h2>Error 404</h2> `);
});

// #====== Listen =======
app.listen(PORT, () => {
	console.log(`Server running at port http://localhost:${PORT}`);
});
