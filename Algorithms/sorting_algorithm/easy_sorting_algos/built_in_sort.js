// sort by numeric

let arr = [6, 4, 15, 10];
function sorting(arr) {
	return arr.sort(function (a, b) {
		return a - b;
	});
}
let newArr = sorting(arr);
console.log(newArr);

// let arr = [
// 	"Askar Mujif",
// 	"Azarudeen",
// 	"Alltrin Prabhu",
// 	"Aravindhan",
// 	"Ashok"
// ];

// function compareByLen(str1, str2) {
// 	return str2.length - str1.length;
// }

// let res = arr.sort(compareByLen);
// console.log(res);
