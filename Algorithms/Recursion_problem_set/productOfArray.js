// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
	let sum = 0;
	function add(arr) {
		if (arr.length === 0) return;
		sum += arr[0];
		add(arr.slice(1));
	}
	add(arr);
	return sum;
}

console.log(productOfArray([1, 2, 3, 4, 5]));
