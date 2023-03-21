let addUp = function(num){
	if(num < 1 || num > 1000){
		return 'Range Exceeded';
	}
	sum = 0;
	for (let i = 1; i <= num; i++) {
		sum+= i;
	}
	return sum
}

console.log(addUp(13));