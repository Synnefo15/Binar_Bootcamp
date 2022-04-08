// &---- Require ----
const fs = require('fs');
const path = require('path');
const express = require('express');


const app = express();
const port = 3002;

app.use(express.static('public'));

// &---- Routing ----

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'..','public','index.html')) // % Express 
	
});

app.get('/cari', (req, res) => {
	res.sendFile(path.join(__dirname,'..','public','cari.html')) // % Express 
	
});

app.get('/cars', (req, res) => {
	res.sendFile(path.join(__dirname, '..','data','cars.json'))
});

// % Ketika page salah
app.use('/', (req, res) => {
	res.status(404);
	res.send(/*html*/ ` <h2>Error 404</h2> `);
});

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
