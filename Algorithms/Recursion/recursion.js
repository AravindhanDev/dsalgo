function countDown(n) {
	if (n < 1) {
		console.log("All done!");
		return;
	}
	console.log(n);
	countDown(--n);
}

function countDown1(n) {
	for (let i = n; i > 0; i--) {
		console.log(i);
	}
	console.log("All done");
}

countDown1(20);
