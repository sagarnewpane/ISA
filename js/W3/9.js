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

console.log(binary(10));