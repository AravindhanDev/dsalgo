function countingSort(a, n, k) {
	const count = Array.from({ length: 10 }, () => 0);
	const b = Array.from({ length: n });
	for (let i = 0; i < n; i++) {
		++count[a[i]];
	}
	for (let i = 1; i <= k; i++) {
		count[i] = count[i - 1] + count[i];
	}
	for (let i = n - 1; i >= 0; i--) {
		b[--count[a[i]]] = a[i];
	}
	for (let i = 0; i < n; i++) {
		a[i] = b[i];
	}
	return a;
}

const a = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9];
const k = Math.max.apply(null, a);
const res = countingSort(a, a.length, k);
console.log(res);
