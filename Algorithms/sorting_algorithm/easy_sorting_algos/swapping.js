let arr = [2, 1, 3, 4, 5];

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

const swapping = (arr, index1, index2) =>
	([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

swapping(arr, 0, 4);
console.log(arr);
