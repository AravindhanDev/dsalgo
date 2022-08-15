function sum(arr) {
	let tot = 0;
	for (let i = 0; i < arr.length; i++) {
		tot += arr[i];
	}
	return tot;
}

console.log(sum([1, 2, 3, 4]));
