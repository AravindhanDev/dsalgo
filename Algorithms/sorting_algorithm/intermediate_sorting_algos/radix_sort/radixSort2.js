const getDigit = (num, loc = 0) => {
	return Math.floor(Math.abs(num) / Math.pow(10, loc)) % 10;
};

const digitCount = (num) => {
	if (num === 0) return count;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (list) => {
	return digitCount(Math.max.apply(null, list));
};

const radixSort = (a, n) => {
	let max = mostDigits(a);
	for (let k = 0; k < max; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < n; i++) {
			let digit = getDigit(a[i], k);
			digitBuckets[digit].push(a[i]);
		}
		a = [].concat(...digitBuckets);
	}
	return a;
};

const list = [23, 345, 5467, 12, 2345, 9852];
const res = radixSort(list, list.length);
console.log(res);
