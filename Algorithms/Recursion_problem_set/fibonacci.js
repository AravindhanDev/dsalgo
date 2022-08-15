function fib(num) {
	let n1 = 0;
	let n2 = 1;
	for (let i = 2; i <= num; i++) {
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
	}
	return n3;
}

function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
