function partition(arr, lb, ub) {
	const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
	let pivot = arr[lb];
	let start = lb;
	let end = ub;
	while (start < end) {
		while (arr[start] <= pivot) {
			start++;
		}
		while (arr[end] > pivot) {
			end--;
		}
		if (start < end) {
			swap(arr, start, end);
		}
	}
	swap(arr, lb, end);
	return end;
}

function quickSort(arr, lb, ub) {
	if (lb < ub) {
		let loc = partition(arr, lb, ub);
		quickSort(arr, lb, loc - 1);
		quickSort(arr, loc + 1, ub);
	}
	return arr;
}

let arr = [7, 6, 10, 5, 9, 2, 1, 15, 7];
let res = quickSort(arr, 0, arr.length - 1);
console.log(res);
