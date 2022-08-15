let nestedList = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

function colSum(list, n, col) {
	sum = 0;
	if (col <= 0) return sum;
	col--;
	for (let i = 0; i < n; i++) {
		if (col > list[i].length - 1) continue;
		sum += list[i][col];
	}
	return sum;
}

function rowSum(list, n, row) {
	if (row > n || row <= 0) return "No such row exist";
	if (n === 0) return "Empty list";
	row--;
	sum = 0;
	for (let i = 0; i < list[row].length; i++) {
		sum += list[row][i];
	}
	return sum;
}
