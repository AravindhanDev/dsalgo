function charCount(str) {
	if (str == undefined || str.length <= 0) return "Empty input";
	if (typeof str != "string") return "Invalid input";
	let newStr = str.toLowerCase();
	let alpha = {
		space: 0,
		numeric: 0,
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		e: 0,
		f: 0,
		g: 0,
		h: 0,
		i: 0,
		j: 0,
		k: 0,
		l: 0,
		m: 0,
		n: 0,
		o: 0,
		p: 0,
		q: 0,
		r: 0,
		s: 0,
		t: 0,
		u: 0,
		v: 0,
		w: 0,
		x: 0,
		y: 0,
		z: 0
	};
	for (let i = 0; i <= newStr.length; i++) {
		if (newStr[i] == " ") alpha["space"] += 1;
		if (newStr[i] == "a") alpha["a"] += 1;
		if (newStr[i] == "b") alpha["b"] += 1;
		if (newStr[i] == "c") alpha["c"] += 1;
		if (newStr[i] == "d") alpha["d"] += 1;
		if (newStr[i] == "e") alpha["e"] += 1;
		if (newStr[i] == "f") alpha["f"] += 1;
		if (newStr[i] == "g") alpha["g"] += 1;
		if (newStr[i] == "h") alpha["h"] += 1;
		if (newStr[i] == "i") alpha["i"] += 1;
		if (newStr[i] == "j") alpha["j"] += 1;
		if (newStr[i] == "k") alpha["k"] += 1;
		if (newStr[i] == "l") alpha["l"] += 1;
		if (newStr[i] == "m") alpha["m"] += 1;
		if (newStr[i] == "n") alpha["n"] += 1;
		if (newStr[i] == "o") alpha["o"] += 1;
		if (newStr[i] == "p") alpha["p"] += 1;
		if (newStr[i] == "q") alpha["q"] += 1;
		if (newStr[i] == "r") alpha["r"] += 1;
		if (newStr[i] == "s") alpha["s"] += 1;
		if (newStr[i] == "t") alpha["t"] += 1;
		if (newStr[i] == "u") alpha["u"] += 1;
		if (newStr[i] == "v") alpha["v"] += 1;
		if (newStr[i] == "w") alpha["w"] += 1;
		if (newStr[i] == "x") alpha["x"] += 1;
		if (newStr[i] == "y") alpha["y"] += 1;
		if (newStr[i] == "z") alpha["z"] += 1;
		if (
			newStr[i] == 1 ||
			newStr[i] == 2 ||
			newStr[i] == 3 ||
			newStr[i] == 4 ||
			newStr[i] == 5 ||
			newStr[i] == 6 ||
			newStr[i] == 7 ||
			newStr[i] == 8 ||
			newStr[i] == 9
		)
			alpha["numeric"] += 1;
	}
	for (let data in alpha) {
		if (alpha[data] == 0) delete alpha[data];
	}
	return alpha;
}

str = "hello";
console.log(charCount(str));
