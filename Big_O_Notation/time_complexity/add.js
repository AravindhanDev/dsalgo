function sum(n) {
	var s = 0;
	for (var i = 1; i <= n; i++) {
		s += i;
	}
	return s;
}

function sum1(n) {
	return (n * (n + 1)) / 2;
}

console.log(sum1(5));
