function isPalindrome(str) {
	let revStr = "";
	function loop(str) {
		if (str.length === 0) return;
		revStr += str[str.length - 1];
		loop(str.slice(0, -1));
	}
	loop(str);
	return revStr === str;
}

let res = isPalindrome("malayalam");
console.log(res);
