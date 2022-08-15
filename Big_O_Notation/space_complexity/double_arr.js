function double(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
}

console.log(double([1, 2, 3, 4, 5]));
