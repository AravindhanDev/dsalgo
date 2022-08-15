// iterative

function factorial(num) {
	let fact = 1;
	for (let i = num; i > 0; i--) {
		fact *= i;
	}
	return fact;
}

function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num - 1);
}

// recursive

console.log(factorial(6));
