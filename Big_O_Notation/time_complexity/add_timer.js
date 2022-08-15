function sum(n) {
	let s = 0;
	for (let i = 1; i <= n; i++) {
		s += i;
	}
	return s;
}

function sum1(n) {
	return (n * (n + 1)) / 2;
}

let t1 = performance.now();
sum1(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
