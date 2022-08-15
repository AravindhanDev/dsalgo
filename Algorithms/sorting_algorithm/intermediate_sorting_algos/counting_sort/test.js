const countingSort = (list, n, max) => {
	const digitContainer = Array.from({ length: 10 }, () => 0);
	const newList = Array.from({ length: n });

	for (let i = 0; i < n; i++) {
		++digitContainer[list[i]];
	}

	for (let i = 1; i <= max; i++) {
		digitContainer[i] = digitContainer[i - 1] + digitContainer[i];
	}

	for (let i = n - 1; i >= 0; i--) {
		newList[--digitContainer[list[i]]] = list[i];
	}

	for (let i = 0; i < n; i++) {
		list[i] = newList[i];
	}

	return list;
};

const list = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9];
const max = Math.max.apply(null, list);
const res = countingSort(list, list.length, max);
console.log(res);
