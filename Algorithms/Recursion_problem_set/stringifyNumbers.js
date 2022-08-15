function stringifyNumbers(obj) {
	let newObj = {};
	for (let data in obj) {
		if (typeof obj[data] == "number") newObj[data] = obj[data].toString();
		else if (typeof obj[data] == "object" && !Array.isArray(obj[data]))
			newObj[data] = stringifyNumbers(obj[data]);
		else newObj[data] = obj[data];
	}
	return newObj;
}

let obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66
		}
	}
};

let res = stringifyNumbers(obj);
console.log(res);
