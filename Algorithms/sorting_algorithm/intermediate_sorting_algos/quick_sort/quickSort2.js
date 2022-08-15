function partition(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
	let pivot = arr[start];
	let swapIndex = start;
	for (let i = start + 1; i <= end; i++) {
		if (pivot <= arr[i]) continue;
		swapIndex++;
		swap(arr, swapIndex, i);
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = partition(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

let arr = [4, 6, 9, 1, 2, 5];
let res = quickSort(arr);
console.log(res);
