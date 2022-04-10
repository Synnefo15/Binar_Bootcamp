const ambilData = document.addEventListener('DOMContentLoaded', function () {
	fetch('http://localhost:3002/json')
		.then((response) => response.json())
		.then((data) => {
			const dataRaw = data;

			dataRaw.forEach((element) => {
				console.log(element);
				document.getElementById('kartu').innerHTML = `${dataRaw.map(carTemplate).join('')}`;
			});
		});
});

function carTemplate(cars) {
	return /*html*/ `<div class="col" >
						<div class="card h-100 card-effect">
							<img src="${cars.image}" class="card-img-top" alt="..." />
							<div class="card-body">
								<p class="card-title">${cars.model}</p>
								<p>${cars.rentPerDay}</p>
								<p class="card-text">
									${cars.description}
								</p>
								<p><i class="fa-solid fa-users"></i>${cars.capacity}</p>
								<p><i class="fa-solid fa-gear"></i>${cars.transmission}</p>
								<p><i class="fa-solid fa-calendar"></i>${cars.year}</p>
							</div>
							<div class="card-footer d-flex justify-content-center">
								<button class="btn-success">Pilih Mobild</button>
							</div>
						</div>
					</div>`;
}


// &---- Fungsi seleksi ----
function getSelectSupir() {
	const selected = document.getElementById('opsi-supir').value;
	console.log(selected);
}
// getSelectSupir();

function getSelectTanggal() {
	const selected = document.getElementById('tanggal').value;
	console.log(selected);
}
// getSelectTanggal();

function getSelectWaktu() {
	const selected = document.getElementById('waktu').value;
	console.log(selected);
}
// getSelectWaktu();
function getSelectPenumpang() {
	const selected = document.getElementById('penumpang').value;
	console.log(selected);
}
// getSelectPenumpang();

let a;
function showAllMobil() {
	if (a == 1) {
		document.getElementById('hasil-section').style.display = 'none';
		return (a = 0);
	} else {
		document.getElementById('hasil-section').style.display = 'block';
		return (a = 1);
	}
}

// &---- Class OOP ----
class Component {
	constructor() {
		if (this.constructor === Component) {
			throw new Error('Tidak bisa dibuat dari Parent Class');
		}
	}
	render() {}
}

class Car extends Component {
	constructor(
		id,
		plate,
		manufacture,
		model,
		image,
		rentPerDay,
		capacity,
		description,
		transmission,
		available,
		type,
		year,
		options,
		specs,
		availableAt
	) {
		this.id = id;
		this.plate = plate;
		this.manufacture = manufacture;
		this.model = model;
		this.image = image;
		this.rentPerDay = rentPerDay;
		this.capacity = capacity;
		this.description = description;
		this.transmission = transmission;
		this.available = available;
		this.type = type;
		this.year = year;
		this.options = options;
		this.specs = specs;
		this.availableAt = availableAt;
	}
	render() {
		return `
        <p>id: <b>${this.id}</b></p>
        <p>plate: <b>${this.plate}</b></p>
        <p>manufacture: <b>${this.manufacture}</b></p>
        <p>model: <b>${this.model}</b></p>
        <p>available at: <b>${this.availableAt}</b></p>
        <img src="${this.image}" alt="${this.manufacture}" width="64px">
    `;
	}
}
