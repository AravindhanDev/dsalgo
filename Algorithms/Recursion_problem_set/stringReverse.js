function reverse(str) {
	if (str.length == 0) return 0;
	let revStr = "";
	function loop(str) {
		if (str.length == 0) return;
		revStr += str[str.length - 1];
		loop(str.slice(0, -1));
	}
	loop(str);
	return revStr;
}

let res = reverse("fuck");
console.log(res);
