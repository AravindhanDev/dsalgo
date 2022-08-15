// [432, 8, 530, 90, 88, 23, 11, 45, 677, 199]

const countSort = (arr, n, pos) => {
	let count = Array.from({ length: 10 }, () => 0);
	let brr = new Array(10);
	for (let i = 0; i < n; i++) ++count[Math.floor(arr[i] / pos) % 10];
	for (let i = 1; i < n; i++) count[i] = count[i] + count[i - 1];
	for (let i = n - 1; i >= 0; i--)
		brr[--count[Math.floor(arr[i] / pos) % 10]] = arr[i];
	for (let i = 0; i < n; i++) arr[i] = brr[i];
	console.log(count);
};

const getMax = (arr) => arr.reduce((a, b) => Math.max(a, b));
const radixSort = (arr, n) => {
	let max = getMax(arr);
	for (let pos = 1; Math.floor(max / pos) > 0; pos *= 10) {
		countSort(arr, n, pos);
	}
	return arr;
};

const arr = [432, 8, 530, 90, 88, 23, 11, 45, 677, 199];
const res = radixSort(arr, arr.length);
console.log(res);
