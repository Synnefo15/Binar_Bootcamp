import girl_img from '../../../../assets/images/girl.png';
import girl2_img from '../../../../assets/images/girl2.png';
import icon_check from '../../../../assets/icons/fi_check.svg';

const Layanan = () => {
	return (
		<section className="py-5" id="service">
			<div className="container d-flex flex-column-reverse flex-lg-row py-5">
				<div className="px-5 position-relative d-flex justify-content-center justify-content-lg-end  align-items-center flex-grow-1 mt-sm-5 mt-lg-0 order-1 order-lg-0 mb-3 mb-lg-0">
					<div className="bg-dark-blue400 rounded-full" id="image-container">
						<img src={girl2_img} alt="Service Girl" id="girl-back" />
						{/* <img id="girl-front" src={girl_img} alt="Service Girl" className="position-absolute" /> */}
					</div>
					<div className="circle circle-1"></div>
					<div className="circle circle-2"></div>
					<div className="circle circle-3"></div>
				</div>
				<div className="w-half w-lg-full text-black ps-lg-4 mt-5 mt-lg-0">
					<h2 className="fw-bold fs-4 mb-4">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
					<p>
						Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan
						yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
						bisnis, wedding, meeting, dll.
					</p>
					<ul className="list-style-check d-flex flex-column gap-4">
						<li>
							<img src={icon_check} alt="icon" />
							Sewa Mobil Dengan Supir di Bali 12 Jam
						</li>
						<li>
							<img src={icon_check} />
							Sewa Mobil Lepas Kunci di Bali 24 Jam
						</li>
						<li>
							<img src={icon_check} />
							Sewa Mobil Jangka Panjang Bulanan
						</li>
						<li>
							<img src={icon_check} />
							Gratis Antar - Jemput Mobil di Bandara
						</li>
						<li>
							<img src={icon_check} />
							Layanan Airport Transfer / Drop In Out
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Layanan;
