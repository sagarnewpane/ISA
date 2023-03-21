function area(base,height){
	area = (base*height) / 2;
	return area
}

// console.log(area(7,4));




function something(a){
	return 'something'+' '+a;
}

// console.log(something("is better than nothing"));

function points(two_pointers,three_pointers){
	return 2*two_pointers + 3*three_pointers
}

console.log(points(7,5));

let lessThan100 = function(n1,n2){
	if(n1+n2 < 100){
		return true;
	}
	else{
		return false;
	}
}

// console.log(lessThan100(22,15));

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

// console.log(addUp(13));

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

// console.log(oddishOrEvenish(121));


function primeInRange(n1, n2) {

  for (let i = n1; i <= n2; i++) {
    let isPrime = true;

    if (i <= 1) {
      isPrime = false;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return true;
    }
  }

  return false;
}

// console.log(primeInRange(3,5));

// Left Shift by Powers of Two
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// shiftToLeft(5, 2) ➞ 20

function shifToLeft(num,y){
	pow = 1;
	for(let i = 1;i<=y;i++ ){
		pow *= 2;
	}
	return num*pow;
	
}
// console.log(shifToLeft(5,2));


function binary(decimal) {
	if (decimal == 0) {
		return '0';
	}
	let binary = [];

	while (decimal > 0) {
		binary.push(decimal % 2);
		decimal = Math.floor(decimal / 2);
	}
	return binary.reverse().join('');
}

// console.log(binary(10));
