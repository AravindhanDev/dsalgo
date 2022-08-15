function collectOddValues(arr) {
	let oddArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) oddArr.push(arr[i]);
	}
	return oddArr;
}

function collectOddValues(arr) {
	let oddArr = [];
	function collect(arr) {
		if (arr.length === 0) return;
		if (arr[0] % 2 !== 0) oddArr.push(arr[0]);
		collect(arr.slice(1));
	}
	collect(arr);
	return oddArr;
}

let oddArr = [];
function collectOddValues1(arr) {
	if (arr.length === 0) return;
	if (arr[0] % 2 !== 0) oddArr.push(arr[0]);
	collectOddValues1(arr.slice(1));
	return oddArr;
}

console.log(collectOddValues1([1, 2, 3, 4, 5, 6, 7]));
