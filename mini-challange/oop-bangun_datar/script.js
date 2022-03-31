class BangunDatar {
	constructor() {
		if (this.constructor === BangunDatar) {
			throw new Error('Tidak bisa dibuat dari Parent Class');
		}
	}

	luas() {
		console.log(`Luas`);
	}

	keliling() {
		console.log(`Keliling`);
	}
}

class Persegi extends BangunDatar {
	constructor(sisi) {
		super();
		this.sisi = sisi;
	}

	luas() {
		const Luas = this.sisi ** 2;
		console.log(`Luas Persegi = ${Luas} `);
	}

	keliling() {
		const keliling = this.sisi * 4;
		console.log(`Keliling Persegi = ${keliling}`);
	}
}

class PersegiPanjang extends BangunDatar {
	constructor(panjang, lebar) {
		super();
		this.panjang = panjang;
		this.lebar = lebar;
	}
	luas() {
		const Luas = this.panjang * this.lebar;
		console.log(`Luas Persegi Panjang = ${Luas} `);
	}
	keliling() {
		const keliling = 2 * (this.panjang + this.lebar);
		console.log(`Keliling Persegi Panjang= ${keliling}`);
	}
}

class Segitiga extends BangunDatar {
	constructor(alas, tinggi, miring) {
		super();
		this.alas = alas;
		this.tinggi = tinggi;
		this.miring = miring;
	}
	luas() {
		const Luas = (1 / 2) * this.alas * this.tinggi;
		console.log(`Luas Segitiga = ${Luas} `);
	}
	keliling(jenis) {
        let keliling = null
		switch (jenis) {
			case 'sama_kaki':
				keliling = this.alas + this.miring * 2; // % segi3 samakaki
				console.log(`Keliling Segitiga sama kaki = ${keliling}`);
				break;
            case 'sama_sisi':
                keliling = this.alas*3
				console.log(`Keliling Segitiga sama sisi = ${keliling}`);
                break
            case 'siku_siku':
                keliling = this.alas + this.tinggi + this.miring
				console.log(`Keliling Segitiga siku-siku = ${keliling}`);
                break
			default:
                console.log(`Pilihan tidak tersedia `);
				break;
		}
	}
}

const persegi1 = new Persegi(5);
console.log(persegi1);
persegi1.luas();
persegi1.keliling();

const persegiPanjang1 = new PersegiPanjang(4, 5);
console.log(persegiPanjang1);
persegiPanjang1.luas();
persegiPanjang1.keliling();

const segitiga1 = new Segitiga(6, 4, 5);
console.log(segitiga1);
segitiga1.luas();
segitiga1.keliling('sama_kaki');
segitiga1.keliling('sama_sisi')
segitiga1.keliling('siku_siku')
