list = [1, 2, 3, 4, -5, 6, 7, -8];
res = filterNegativeNumbers(list);
console.log(res);

function filterNegativeNumbers(list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i] < 0) {
			list.splice(i, 1);
			i--;
		}
	}
	return list;
}
