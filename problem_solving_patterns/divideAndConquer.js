// // naive solution

// function search(arr, n) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == n) return i;
// 	}
// 	return -1;
// }

// function binarySearch(arr, n) {
// 	let l = 0,
// 		r = arr.length - 1;
// 	while (l <= r) {
// 		let mid = Math.floor((l + r) / 2);
// 		if (arr[mid] == n) return mid;
// 		else if (arr[mid] > n) r = mid - 1;
// 		else l = mid + 1;
// 	}
// 	return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));

// function sameFrequency(num1, num2) {
// 	let str1 = num1.toString();
// 	let str2 = num2.toString();
// 	if (str1.length !== str2.length) return false;
// 	let counter1 = {};
// 	let counter2 = {};
// 	for (let data of str1) {
// 		counter1[data] ? counter1[data]++ : (counter1[data] = 1);
// 	}
// 	for (let data of str2) {
// 		counter2[data] ? counter2[data]++ : (counter2[data] = 1);
// 	}
// 	for (let key in counter1) {
// 		if (!key in counter2) return false;
// 		if (counter2[key] !== counter1[key]) return false;
// 	}
// 	return true;
// }

// console.log(sameFrequency(182, 128));

// function areThereDuplicates() {
// 	let counter1 = {};
// 	for (let data in arguments) {
// 		let item = arguments[data];
// 		counter1[item] ? counter1[item]++ : (counter1[item] = 1);
// 	}
// 	for (let data in counter1) {
// 		if (counter1[data] > 1) return true;
// 	}
// 	return false;
// }

function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(4, 5, 6));
