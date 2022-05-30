import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import FilteredCar from './filteredCar';

const SearchCar = () => {
	// #====== Logika =======
	const [cars, setCars] = useState([]);
	const [filterCar, setFilterCar] = useState({
		driver: '',
		tanggal: '',
		waktu: '',
		penumpang: 0,
	});

	useEffect(() => {
		axios
			.get(
				'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
			)
			.then((response) => {
				setCars(response.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const getDriverType = (event) => {
		setFilterCar({
			driver: event.target.value,
		});
	};

	const getDateRent = (event) => {
		setFilterCar((prevState) => ({
			...prevState,
			tanggal: event.target.value,
		}));
	};

	const getTimeRent = (event) => {
		setFilterCar((prevState) => ({
			...prevState,
			waktu: event.target.value,
		}));
	};

	const getPassengerCount = (event) => {
		setFilterCar((prevState) => ({
			...prevState,
			penumpang: parseInt(event.target.value),
		}));
	};

	const doFilterCars = () => {
		const filteredCarsData = cars.filter(
			(item) =>
				item.capacity === filterCar.penumpang &&
				moment(item.availableAt).format('L') == moment(filterCar.tanggal).format('L')
		);

		console.info(filteredCarsData);

		setCars(filteredCarsData);

		cars.forEach((val) => {
			console.info('PARSED DATE ITEM : ', moment(val.availableAt).format('L'));
			console.info('PARSED DATE FILTER PARAM : ', moment(filterCar.tanggal).format('L'));
		});
	};

	return (
		<React.Fragment>
			<section id="cars">
				<div className="container">
					<div className="card p-4 mx-auto shadow bg-body rounded">
						<form action="#">
							<div className="row">
								<div className="col-lg-2 col-md-12">
									<label for="selectCars">Tipe Driver</label>
									<select
										onClick={(event) => {
											getDriverType(event);
										}}
										id="driver"
										className="form-select"
										aria-label="Tipe Driver"
									>
										<option selected disabled>
											Pilih Tipe Driver
										</option>
										<option value="0">Dengan Supir</option>
										<option value="1">Lepas Kunci</option>
									</select>
								</div>
								<div className="col-lg-2 col-md-12">
									<label for="pesan">Tanggal</label>
									<input
										onChange={(event) => {
											getDateRent(event);
										}}
										className="form-control"
										type="date"
										name="date"
										id="pesan"
									/>
								</div>
								<div className="col-lg-3 col-md-12">
									<label for="waktu">Waktu Jemput/Ambil</label>
									<input
										onClick={(event) => {
											getTimeRent(event);
										}}
										className="form-control"
										type="time"
										name="time"
										id="waktu"
									/>
								</div>
								<div className="col-lg-3 col-md-12">
									<label for="penumpang">Jumlah Penumpang (Optional)</label>
									<input
										onChange={(event) => {
											getPassengerCount(event);
										}}
										className="form-control"
										type="number"
										name="capacity"
										id="penumpang"
										placeholder="Jumlah Penumpang"
									/>
								</div>
								<div className="col-lg-2 col-md-12">
									<label for="" style={{ visibility: 'hidden' }}>
										Tombol
									</label>
									<button
										onClick={() => {
											doFilterCars();
										}}
										type="button"
										className="form-control btn btn-success fw-bold"
										id="load-btn"
									>
										Cari Mobil
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			<div className="container mt-5 pt-5">
                <div id="cars-container" className="row gap-3 justify-content-center">
				{cars.map((value, index) => {
					return (
						<React.Fragment>
							<div className="col-md-3">
								<div className="card p-4 shadow-sm rounded border-0 h-full justify-content-between">
									<div>
										<img src={value.image} alt={value.manufacture} className="car-image mb-3" />
										<p>
											{value.model}/{value.type}
										</p>
										<p className="fw-bold">Rp {value.rentPerDay} / Hari</p>
										<p>{value.description}</p>
										<p>
											<i className="fa fa-users" aria-hidden="true"></i> {value.capacity} orang
										</p>
										<p>
											<i className="fa fa-cog" aria-hidden="true"></i> {value.transmission}
										</p>
										<p>
											<i className="fa fa-calendar-o" aria-hidden="true"></i> {value.year}
										</p>
									</div>
									<button className="btn btn-success fw-bold">Pilih Mobil</button>
								</div>
							</div>
						</React.Fragment>
					);
				})}
                </div>
			</div>
		</React.Fragment>
	);
};

export default SearchCar;
