// naive solution

// function bubbleSort(arr, n) {
// 	if (arr.length === 0) return "empty array";
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n - i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
// 			}
// 		}
// 	}
// 	return arr;
// }

// let arr = [8, 1, 2, 3, 4, 5, 6, 7];
// let res = bubbleSort(arr, arr.length);
// console.log("result", res);

// optimized solution

function bubbleSort(arr, n) {
	if (arr.length === 0) return "empty array";
	let isSwapMade;
	for (let i = 0; i < n; i++) {
		isSwapMade = false;
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				isSwapMade = true;
			}
		}
		if (!isSwapMade) break;
	}
	return arr;
}

let arr = [8, 1, 2, 3, 4, 5, 6, 7];
let res = bubbleSort(arr, arr.length);
console.log("result", res);
