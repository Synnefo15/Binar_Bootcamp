const fs = require('fs');
const path = require('path');
const express = require('express');
// const { dirname } = require('path');
const app = express();
const port = 3002;
// const aset_path = __dirname + '../public/';

// const cars = fs.readFileSync('../data/cars.json', 'utf-8');
// console.log(cars);

const readCars = fs.readFile('../data/cars.json', (e, jsonStr) => {
	if (e) {
		return e;
	}
	const parsedJson = JSON.parse(jsonStr);
	console.log(`Json : ${jsonStr}`);
	parsedJson.forEach((element) => {
		console.log(`nama:${element.model}`);
	});
});


// TODO
// function jsonReader(filepath, cb) {
// 	fs.readFile(filepath, 'utf-8', (err, fileData) => {
// 		if (err) {
// 			return cb && cb(err);
// 		}
// 		try {
// 			const data = JSON.parse(jsonStr);
// 			return cb && cb(null, object);
// 		} catch (err) {
// 			return cb && cb(err);
// 		}
// 	});
// }
// const readCar = fs.readFileSync('../data/cars.json')

app.use(express.static('public'));

app.get('/', (req, res) => {
	// res.sendFile(path.join(aset_path + 'index.html'));
	res.sendFile(path.join(__dirname,'..','public','index.html'))
});

app.get('/cari-mobil', (req, res) => {
	// console.log(path.join(aset_path + 'cari.html'));
	res.sendFile(path.join(__dirname,'..','public','cari.html'))

	// res.send('ini cari')
});

app.get('/cars', (req, res) => {
	res.json({
		nama : 'rafi'
	})
});

// % Ketika page salah
app.use('/', (req, res) => {
	res.status(404);
	res.send(/*html*/ ` <h2>Error 404</h2> `);
});

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
