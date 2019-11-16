function multiply(number) {
	return factor => factor * number;
}	

let twice = multiply(2);
console.log(twice(2));
console.log('');
