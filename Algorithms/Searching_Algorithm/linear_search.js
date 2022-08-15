function linearSearch(arr, n) {
	for (let i = 0; i < arr.length; i++) if (arr[i] == n) return i;
	return -1;
}

// let count = 0;
// function linearSearch(arr, n) {
// 	if (arr.length === 0) return -1;
// 	if (arr[0] === n) return count;
// 	count++;
// 	return linearSearch(arr.slice(1), n);
// }

let res = linearSearch([1, 2, 3, 4, 5], 3);
console.log(res);
