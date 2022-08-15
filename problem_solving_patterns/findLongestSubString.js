function findLongestSubString(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		longest = Math.max(longest, i - start + 1);
		seen[char] = i + 1;
	}
	return longest;
}

function findLongestSubString(str) {
	let count = (i = j = 0);
	let n = str.length;
	let set = new Set();
	while (i < n && j < n) {
		let char = str.charAt(j);
		if (!set.has(char)) {
			set.add(char);
			j++;
			count = Math.max(count, j - i);
		} else {
			set.delete(str.charAt(i));
			i++;
		}
	}
	return count;
}

console.log(findLongestSubString(""));
