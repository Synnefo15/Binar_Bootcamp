import car_img from '../../../../assets/images/mercedes.png'
const Banner = () => {
	return (
		<section
			className="bg-main vh-100 position-relative overflow-hidden"
			style={{ paddingTop: '4em' }}
		>
			<div className="container h-full">
				<div className="row h-full">
					<div className="col-12 col-lg-6 d-flex align-items-lg-center">
						<div className="text-black">
							<h1 className="fw-bold mb-4 hero-title">
								Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
							</h1>
							<p className="mb-4 hero-paragraph">
								Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
								harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
							</p>
							<button className="btn fw-bold bg-success text-white" onclick="toCars()">
								Mulai Sewa Mobil
							</button>
						</div>
					</div>
					<div className="col-12 col-lg-6 d-flex align-items-end">
						<div id="car-container" className="bg-dark-blue400 rounded-top-left-10">
							<img src={car_img} alt="" srcset="" id="car-image" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner
