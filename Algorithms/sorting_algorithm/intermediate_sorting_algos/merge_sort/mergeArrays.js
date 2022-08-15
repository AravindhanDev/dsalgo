function merge(arr1, arr2) {
	let i = (j = 0);
	let newArr = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] > arr2[j]) {
			newArr.push(arr2[j]);
			j++;
		} else {
			newArr.push(arr1[i]);
			i++;
		}
	}
	while (i < arr1.length) {
		newArr.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		newArr.push(arr2[j]);
		j++;
	}
	return newArr;
}

let res = merge([1, 10, 50], [2, 14, 99, 100]);
console.log(res);
