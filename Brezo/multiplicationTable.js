// First of all, show table of 10

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 10 = " + number * 10)
};




// Now diferents tables for all numbers

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 1 = " + number * 1)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 2 = " + number * 2)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 3 = " + number * 3)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 4 = " + number * 4)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 5 = " + number * 5)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 6 = " + number * 6)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 7 = " + number * 7)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 8 = " + number * 8)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 9 = " + number * 9)
};

for (var number = 1; number <= 10; number++) {
	console.log(number + " X 10 = " + number * 10)
};




// And joint all for more elegant code

for (var number = 1; number <= 10; number++) {
	for (var numberToMultiply = 1; numberToMultiply <= 10; numberToMultiply++) {
		console.log(number + " X " + numberToMultiply + " = " + number * numberToMultiply);
	}
}