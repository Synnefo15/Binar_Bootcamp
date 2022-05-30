const BannerRent = () => {
	return (
		<section className="bg-main vh-100 position-relative overflow-hidden" style={{ "padding-top": "4em" }}>
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
						</div>
					</div>
					<div className="col-12 col-lg-6 d-flex align-items-end">
						<div id="car-container" className="bg-dark-blue400 rounded-top-left-10">
							<img src="images/mercedes.png" alt="Mecedes Toyota" id="car-image" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerRent;
