function oddishOrEvenish(num){
	sum = 0;
	while (num > 0){
		d = num%10 ;
		sum += d;
		num = Math.round(num / 10);
	}
	if(sum%2 == 0){
		return "Evenish";
	}
	else{
		return "Oddish";
	}
	
}

console.log(oddishOrEvenish(121));