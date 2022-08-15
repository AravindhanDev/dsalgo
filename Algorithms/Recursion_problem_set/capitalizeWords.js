function capitalizeWords(arr) {
	let newArr = [];
	if (arr.length === 0) return newArr;
	newArr.push(arr[0].toUpperCase());
	newArr = newArr.concat(capitalizeWords(arr.slice(1)));
	return newArr;
}

let res = capitalizeWords(["i", "am", "learning", "recursion"]);
console.log(res);
