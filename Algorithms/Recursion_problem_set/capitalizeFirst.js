function capitalizeFirst(arr) {
	let newArr = [];
	function loop(arr) {
		if (arr.length === 0) return 0;
		newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
		loop(arr.slice(1));
	}
	loop(arr);
	return newArr;
}

let res = capitalizeFirst(["car", "bike", "lorry"]);
console.log(res);
