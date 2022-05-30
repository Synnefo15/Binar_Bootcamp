
// import "css/style.css"
import "../../../../css/style.css"

const Testi = () => {
	return (
		<section id="testimonial" className="py-5">
			<div className="container">
				<header className="text-black mb-5 text-center">
					<h2 className="fw-bold mb-3">Testimonial</h2>
					<p>Berbagai review positif dari para pelanggan kami</p>
				</header>

				{/* <!-- Carousel --> */}
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="card bg-main">
								<div className="card-body d-flex justify-content-between align-items-center">
									<img src="images/person1.png" alt="Icon Profesional" />
									<div className="ms-4">
										<p>⭐⭐⭐⭐⭐</p>
										<p className="card-text">
											“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
											ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
											dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
										</p>
										<p className="fw-bold">John Dee 32, Bromo</p>
									</div>
								</div>
							</div>
						</div>

						<div className="carousel-item">
							<div className="card bg-main">
								<div className="card-body d-flex justify-content-between align-items-center">
									<img src="images/person2.png" alt="Icon Profesional" />
									<div className="ms-4">
										<p>⭐⭐⭐⭐⭐</p>
										<p className="card-text">
											“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
											ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
											dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
										</p>
										<p className="fw-bold">John Dee 32, Bromo</p>
									</div>
								</div>
							</div>
						</div>

						<div className="carousel-item">
							<div className="card bg-main">
								<div className="card-body d-flex justify-content-between align-items-center">
									<img src="images/person3.png" alt="Icon Profesional" />
									<div className="ms-4">
										<p>⭐⭐⭐⭐⭐</p>
										<p className="card-text">
											“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
											ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
											dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
										</p>
										<p className="fw-bold">John Dee 32, Bromo</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-center gap-2 mt-3">
						<button
							className="carousel-control carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				{/* <!-- End Of Carousel --> */}

				<div className="mt-5 bg-dark-blue400 text-center text-white py-5 rounded">
					<p className="fw-bold fs-5">Sewa Mobil di (Lokasimu) Sekarang</p>
					<p className="w-half mx-auto">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.{' '}
					</p>
					<a href="#" className="btn fw-bold bg-lime-green400 text-white">
						Mulai Sewa Mobil
					</a>
				</div>
			</div>
		</section>
	);
};
export default Testi;
