function filterCarByAvailability(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe
	console.log(cars);

	// Tempat penampungan hasil
	const result = [];

	// Tulis code-mu disini
	// result = cars.filter(function(car){
	//   return car.available == true;
	// })
	for (let index = 0; index < cars.length; index++) {
		if (cars[index]['available'] == true) {
			result.push(cars[index]);
		}
	}

	// Rubah code ini dengan array hasil filter berdasarkan availablity
	return result;
}
