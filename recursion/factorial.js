const getFactorial = (num) => {
	let total = 1;
	if (num < 2) return total;

	return num * getFactorial(num -1);
}