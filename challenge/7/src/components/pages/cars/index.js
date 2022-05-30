


import Navbar from '../../shared/Navbar';
import BannerRent from './banner';
import SearchCar from './pencarian';

const RentCar = () => {
	

	return (
		<div classNameName='position-relative'>
			<Navbar />
			{/* TODO: Filter data cars */}
			<BannerRent />
            <SearchCar />
			{/* <div className="row">
				<div className="col-md-3">
					<label>Pilih tipe driper</label>
					<select id="driver" onClick={(event) => getDriverType(event)}>
						<option value="supir">Supir</option>
						<option value="lepas_konci">Lepas konci</option>
					</select>
				</div>
				<div className="col-md-3">
					<label>Pilih tanggal pesan</label>
					<input id="pesan" type="date" onChange={(event) => getDateRent(event)} />
				</div>
				<div className="col-md-3">
					<label>Pilih waktu</label>
					<select id="waktu" onClick={(event) => getTimeRent(event)}>
						<option value="08.00">08.00 WIB</option>
						<option value="09.00">09.00 WIB</option>
						<option value="10.00">10.00 WIB</option>
						<option value="11.00">11.00 WIB</option>
						<option value="12.00">12.00 WIB</option>
					</select>
				</div>
				<div className="col-md-3">
					<label>Jumlah penumpang</label>
					<input id="penumpang" type="number" onChange={(event) => getPassengerCount(event)} />
				</div>
			</div>
			<button type="button" className="btn btn-success" onClick={() => doFilterCars()}>
				Cari mobil
			</button> */}
			{/* Content */}
			{/* <div id="kentang" className="kentang">
				{cars.map((value, index) => {
					return (
						<>
							<div className="container">
								<div className="col-md-4">
									<div className="card" style={{ width: '18rem' }}>
										<img src="..." className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title">
												{value.model}/{value.type}
											</h5>
											<p className="card-text">
												Some quick example text to build on the card title and make up the bulk of
												the card's content.
											</p>
											<a href="#" className="btn btn-primary">
												Go somewhere
											</a>
										</div>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div> */}
		</div>
	);
};

export default RentCar;
