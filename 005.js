function leapYear(tahun1,tahun2){
	let i = tahun1;
	do{
		if ((i % 4) == 0) {
			if ((i % 100) == 0) {
				if ((i % 400) == 0) {
					console.log(i+" adalah tahun kabisat");
				}else{
					console.log(i+" adalah bukan tahun kabisat");
				}	
			}else{
				console.log(i+" adalah tahun kabisat");
			}
		}else{
		console.log(i+" adalah bukan tahun kabisat");
		}
		i++;
	}while (i <= tahun2)
}

var average = leapYear(1600,2020);
console.log(average);

