// function binarySearch(arr, data) {
// 	let l = 0;
// 	let r = arr.length - 1;
// 	while (l <= r) {
// 		let mid = Math.round((l + r) / 2);
// 		if (arr[mid] === data) return mid;
// 		else if (arr[mid] < data) l = mid + 1;
// 		else r = mid - 1;
// 	}
// 	return -1;
// }
// let res = binarySearch([1, 2, 3, 4, 5], 5);
// console.log(res);

const binarySearch = (arr, data, start, end) => {
	if (start > end) return -1;

	let middle = Math.floor((start + end) / 2);

	if (arr[middle] === data) {
		return middle;
	}

	if (arr[middle] > data) {
		return binarySearch(arr, data, start, middle - 1);
	}

	if (arr[middle] < data) {
		return binarySearch(arr, data, middle + 1, end);
	}
};

const arr = [5, 9, 13, 29];
const data = 9;
const res = binarySearch(arr, data, 0, arr.length - 1);
console.log("Element found at index", res);
