function flatten(oldArr) {
	let newArr = [];
	for (let i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}

let res = flatten([1, 2, 3, [4, 5]]);
console.log(res);
