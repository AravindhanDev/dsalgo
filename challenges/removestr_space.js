const str = "Hello,            World!";
const res = removeSpace(str, str.length);
console.log(res);

function removeSpace(str, n) {
	if (str === "") return "empty string";
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== " ") newStr += str[i];
	}
	return newStr;
}
