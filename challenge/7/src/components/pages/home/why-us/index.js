import icon_24hr from '../../../../assets/icons/icon_24hrs.png';
import icon_price from '../../../../assets/icons/icon_price.png';
import icon_pro from '../../../../assets/icons/icon_professional.png';
import icon_complete from '../../../../assets/icons/icon_complete.png';

const Why_us = () => {
	return (
		<section id="whyus" className="py-5">
			<div className="container">
				<header className="text-black text-center text-lg-start mb-5">
					<h2 className="fw-bold mb-3">Why Us?</h2>
					<p>Mengapa harus pilih Binar Car Rental?</p>
				</header>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-black">
					<div className="col">
						<div className="card border-secondary mb-3">
							<div className="card-body">
								<img src={icon_complete} alt="Icon Complete" className="mb-3" />
								<h3 className="card-title mb-3 fs-5 fw-bold">Mobil Lengkap</h3>
								<p className="card-text">
									Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card border-secondary mb-3">
							<div className="card-body">
								<img src={icon_price} alt="Icon Price" className="mb-3" />
								<h3 className="card-title mb-3 fs-5 fw-bold">Harga Murah</h3>
								<p className="card-text">
									Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card border-secondary mb-3">
							<div className="card-body">
								<img src={icon_24hr} alt="Icon 24" className="mb-3" />
								<h3 className="card-title mb-3 fs-5 fw-bold">Layanan 24 Jam</h3>
								<p className="card-text">
									Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
									minggu
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card border-secondary mb-3">
							<div className="card-body">
								<img src={icon_pro} alt="Icon Profesional" className="mb-3" />
								<h3 className="card-title mb-3 fs-5 fw-bold">Sopir Profesional</h3>
								<p className="card-text">
									Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Why_us