// const maxSubArraySum = (arr, n) => {
// 	if (arr.length < n) return null;
// 	let max = -Infinity;
// 	for (let i = 0; i < arr.length - n + 1; i++) {
// 		let temp = 0;
// 		for (let j = 0; j < n; j++) {
// 			temp += arr[i + j];
// 		}
// 		if (temp > max) max = temp;
// 	}
// 	return max;
// };
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));

const maxSubArraySum2 = (arr, num) => {
	let max = (temp = 0);
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		max += arr[i];
	}
	temp = max;
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(temp, max);
	}
	return max;
};
// console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

const maxSubArraySum3 = (arr, num) => {
	let temp = (max = 0);
	for (let i = 0; i < num; i++) {
		temp += arr[i];
	}
	max = temp;
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(temp, max);
	}
	return max;
};
console.log(maxSubArraySum3([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
