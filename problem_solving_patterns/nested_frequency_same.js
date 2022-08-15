// These solutions are nested loops which has time complexity that o(n^2)

// solution 1
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		const index = arr2.indexOf(Math.pow(arr1[i], 2));
		if (index === -1) return false;
		arr2.splice(index, 1);
	}
	return true;
}

// solution 2
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	let index;
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] ** 2 === arr2[j]) {
				index = j;
				break;
			} else index = -1;
		}
		if (index === -1) return false;
		arr2.splice(index, 1);
	}
	return true;
}

console.log(same([1, 2, 3], [1, 9, 4]));
