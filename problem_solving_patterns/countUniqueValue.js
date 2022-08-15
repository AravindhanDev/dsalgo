// o(n) solution, only if array is sorted or it need to sorted to perform this operation

const globalArr = [1, 2, 2, 3, 3];

const countUniqueValues = (arr) => {
	let n = arr.length,
		i = 0;
	if (n == 0) return 0;
	for (let j = 1; j < n; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
};

console.log(countUniqueValues(globalArr));

const countUniqueValues1 = (arr) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newArr.includes(arr[i])) newArr.push(arr[i]);
	}
	return newArr.length;
};

console.log(countUniqueValues1(globalArr));

const countUniqueValues2 = (arr) => {
	return new Set(arr).size;
};

console.log(countUniqueValues2(globalArr));
