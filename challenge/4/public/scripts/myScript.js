let a;



function cariMobil() {
	if (a == 1) {
		document.getElementById('hasil-section').style.display = 'none';
		return (a = 0);
	} else {
		document.getElementById('hasil-section').style.display = 'block';
		return (a = 1);
	}
}

// &---- Fungsi seleksi ----
function getSelectSupir() {
	const selected = document.getElementById('opsi-supir').value;
	console.log(selected);
}
getSelectSupir();

function getSelectTanggal() {
	const selected = document.getElementById('tanggal').value;
	console.log(selected);
}
getSelectTanggal();



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
