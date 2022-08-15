let sumZero1 = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] == 0) {
				return [arr[i], arr[j]];
			}
		}
	}
};

let sumZero2 = (arr) => {
	let l = 0,
		r = arr.length - 1;
	while (l < r) {
		let sum = arr[l] + arr[r];
		if (sum == 0) return [arr[l], arr[r]];
		sum > 0 ? r-- : l++;
	}
};

arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
console.log(sumZero2(arr));
