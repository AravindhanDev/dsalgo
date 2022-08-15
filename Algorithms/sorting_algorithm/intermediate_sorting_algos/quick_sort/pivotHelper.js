function pivot(arr, start = 0, end = arr.length + 1) {
	function swap(arr, i, j) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	var pivot = arr[start];
	var swapIndex = start;
	for (let i = start + 1; i < arr.length; i++) {
		if (pivot < arr[i]) continue;
		swapIndex++;
		swap(arr, swapIndex, i);
	}
	swap(arr, 0, swapIndex);
	return swapIndex;
}

let res = pivot([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(res);
