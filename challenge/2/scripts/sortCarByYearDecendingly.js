function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
		for (let j = 0; j < cars.length - 1 - i; j++) {
			if (cars[j]["year"] < cars[j + 1]["year"]) {
				[cars[j], cars[j + 1]] = [cars[j + 1], cars[j]];
			}
		}
	}
	return cars;

  // Rubah code ini dengan array hasil sorting secara descending
  // return result;
}

// function sortCarByYearDescendingly(cars) {
//   var swap;
//   do{
//     swap = false;
    
//     for(var i = 0; i < cars.length-1; i++) {
//       if(cars[i].year < cars[i + 1].year) {
//         var tukar = cars[i];
//         cars[i] = cars[i + 1];
//         cars[i + 1] = tukar;
//         swap = true;
//       }
//     }
//   }
//   while(swap);
//   const result = [...cars];
//   return cars 
// }

