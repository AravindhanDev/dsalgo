const validAnagram = (str1, str2) => {
	let strArr1 = str1.split("");
	let strArr2 = str2.split("");
	if (str1.length !== strArr2.length) return false;
	for (let i = 0; i < strArr1.length; i++) {
		let index = strArr2.indexOf(str1[i]);
		if (index === -1) return false;
		strArr2.splice(index, 1);
	}
	return true;
};

console.log(validAnagram("fuck", "fuck"));
