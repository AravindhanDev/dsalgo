// function averagePair(arr, n) {
// 	if (arr.length == 0) return false;
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 1; j < arr.length; j++) {
// 			let value = (arr[i] + arr[j]) / 2;
// 			if (value == n) return true;
// 		}
// 	}
// 	return false;
// }

function averagePair(arr, n) {
	if (arr.length == 0) return false;
	let l = 0,
		r = arr.length - 1;
	while (l < r) {
		let avg = (arr[l] + arr[r]) / 2;
		if (avg == n) return true;
		else if (avg > n) r--;
		else l++;
	}
	return false;
}

console.log(averagePair([1, 2, 3, 4, 5], 2));
// console.log(averagePair([1, 2, 3], 2));
