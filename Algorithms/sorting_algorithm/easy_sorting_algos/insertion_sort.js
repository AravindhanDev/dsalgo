function insertionSort(arr, n) {
	if (n === 0) return [];
	let temp;
	for (let i = 1; i < n; i++) {
		temp = arr[i];
		for (let j = i - 1; j >= 0 && arr[j] > temp; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = temp;
	}
	return arr;
}

let arr = [2, 1, 9, 76, 4];
let res = insertionSort(arr, arr.length);
console.log(res);
