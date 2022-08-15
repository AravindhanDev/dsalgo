function myFunction(arr) {
	let objkey = [];
	let newObj = {};
	for (let data of arr) {
		let first = data[0].toLowerCase();
		objkey.push(first);
		newObj[first] = [];
	}
	objkey = [...new Set(objkey)];
	for (let data of arr) {
		let first = data[0].toLowerCase();
		newObj[first].push(data);
	}
	return newObj;
}

console.log(myFunction(["Berlin", "Paris", "Prague"]));
