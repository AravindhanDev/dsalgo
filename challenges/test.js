const str = "welcome bruh";
const vowels = ["a", "e", "i", "o", "u"];
const res = countVowels(str);
console.log(res);

function countVowels(str, n = str.length, count = 0) {
	for (let i = 0; i < n; i++) {
		if (vowels.includes(str[i])) {
			count++;
		}
	}
	return count;
}
