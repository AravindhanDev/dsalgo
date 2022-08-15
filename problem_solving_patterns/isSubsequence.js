function isSubsequence(str1, str2) {
	if (str1.length > str2.length) return false;
	for (let i = 0; i < str1.length; i++) {
		let char = str1[i];
		if (str2.includes(char)) str2 = str2.replace(char, "");
		else return false;
	}
	return true;
}

// multiple pointer solution
function isSubsequence(str1, str2) {
	let i = 0;
	if (!str1) return true;
	for (let j = 0; j < str2.length; j++) {
		if (str1[i] === str2[j]) i++;
		if (i === str1.length) return true;
	}
	return false;
}

//recursive
function isSubsequence1(str1, str2) {
	if (str1.length == 0) return true;
	if (str2.length == 0) return false;
	if (str1[0] == str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
	return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence1("fuck", "fuck"));
