function charCount(str) {
	if (typeof str != "string") return "Invalid input";
	if (str == undefined || str.length <= 0) return "Empty input";
	let res = {};
	for (let char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			res[char] = ++res[char] || 1;
		}
	}
	return res;
}
function isAlphaNumeric(char) {
	let code = char.charCodeAt();
	if (
		!(code > 47 && code < 58) &&
		!(code > 64 && code < 91) &&
		!(code > 96 && code < 123)
	)
		return false;
	return true;
}
console.log(charCount("Ganesan is the best"));
