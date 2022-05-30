
const Navbar = () => {
	return (
		<header className="bg-transparent w-full fixed-top">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container-fluid">
						<a className="navbar-brand" href="">
							Binar Car Rental
						</a>
						{/* <!-- <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> --> */}
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasRight"
							aria-controls="offcanvasRight"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-end" id="navbarToggle">
							<ul className="navbar-nav mb-2 mb-lg-0 gap-4">
								<li className="nav-item">
									<a className="nav-link" href="#service">
										Our Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#whyus">
										Why Us
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#testimonial">
										Testimonial
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#faq">
										FAQ
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link btn bg-lime-green400 text-white fw-bold px-3 bg-success" href="#">
										Register
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

			{/* <!-- offcanvas right --> */}
			<div
				className="offcanvas offcanvas-end text-black"
				tabindex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel"
			>
				<div className="offcanvas-header">
					<h1 id="offcanvasRightLabel" className="fw-bold">
						BCR
					</h1>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<ul className="navbar-nav mb-2 mb-lg-0 gap-4">
						<li className="nav-item">
							<a className="nav-link" href="#service">
								Our Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#whyus">
								Why Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#testimonial">
								Testimonial
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#faq">
								FAQ
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link btn bg-lime-green400 text-white fw-bold px-3" href="#">
								Register
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar
