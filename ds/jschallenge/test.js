countSort = (list, n, max, pos) => {
	count = Array.from({ length: 10 }, () => 0);
	newList = Array.from({ length: n });

	for (i = 0; i < n; i++) {
		++count[Math.floor(list[i] / pos) % 10];
	}

	for (i = 1; i <= max; i++) {
		count[i] = count[i - 1] + count[i];
	}

	for (let i = n - 1; i >= 0; i--) {
		newList[--count[Math.floor(list[i] / pos) % 10]] = list[i];
	}

	for (let i = 0; i < n; i++) {
		list[i] = newList[i];
	}
};

radixSort = (list, n, max) => {
	for (pos = 1; Math.floor(max / pos); pos *= 10) {
		countSort(list, n, max, pos);
	}
	return list;
};

list = [432, 8, 530, 90, 88, 231, 11, 45, 677, 199];
max = Math.max.apply(null, list);
res = radixSort(list, list.length, max);
console.log(res);
