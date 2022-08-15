function selectionSort(arr, n) {
	const swap = (arr, index1, index2) =>
		([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

	if (n === 0) return [];
	for (let i = 0; i < n; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) swap(arr, i, min);
	}
	return arr;
}

let arr = [34, 22, 10, 19, 17];
let res = selectionSort(arr, arr.length);
console.log(res);
