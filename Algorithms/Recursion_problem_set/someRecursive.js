const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, isOdd) {
	if (arr.length === 0) return false;
	if (isOdd(arr[0])) return true;
	return someRecursive(arr.slice(1), isOdd);
}

// for (let i = 0; i < arr.length; i++) {
//     if (isOdd(arr[i])) return true;
// }

let res = someRecursive([2, 6], isOdd);
console.log(res);
