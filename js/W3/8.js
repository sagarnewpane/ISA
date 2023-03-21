function shifToLeft(num,y){
	pow = 1;
	for(let i = 1;i<=y;i++ ){
		pow *= 2;
	}
	return num*pow;
	
}
console.log(shifToLeft(5,2));