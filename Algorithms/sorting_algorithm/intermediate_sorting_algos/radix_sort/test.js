// radix sort implementation

const countSort = (a, n, pos) => {
	const b = new Array(10);
	const count = Array.from({ length: 10 }, () => 0);
	for (let i = 0; i < n; i++) ++count[Math.floor(a[i] / pos) % 10];
	for (let i = 1; i < n; i++) count[i] = count[i] + count[i - 1];
	for (let i = n - 1; i >= 0; i--)
		b[--count[Math.floor(a[i] / pos) % 10]] = a[i];
	for (let i = 0; i < n; i++) a[i] = b[i];
};
const radixSort = (a, n) => {
	const max = Math.max.apply(null, a);
	for (let pos = 1; Math.floor(max / pos) > 0; pos *= 10) {
		countSort(a, n, pos);
	}
	return a;
};

const list = [432, 8, 530, 90, 88, 23, 11, 45, 677, 199];
const res = radixSort(list, list.length);
console.log(res);
