function validAnagram(a, b) {
	if (a.length !== b.length) return false;
	let obj = {};
	for (let i = 0; i < a.length; i++) {
		obj[a[i]] ? obj[a[i]]++ : (obj[a[i]] = 1);
	}
	for (let i = 0; i < b.length; i++) {
		if (obj[b[i]]) obj[b[i]]--;
		else return false;
	}
	return true;
}

console.log(validAnagram("anagram", "anagram"));
