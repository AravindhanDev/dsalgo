const input_name = document.querySelector("[data-name]");
const input_age = document.querySelector("[data-age]");
const input_male = document.querySelector("[data-male]");
const input_female = document.querySelector("[data-female]");
const input_berth = document.querySelector("[data-berth]");
const btn = document.querySelector("[data-btn]");

btn.addEventListener("click", (e) => {
	console.clear();
	const name = input_name.value;
	const age = input_age.value;
	const male = input_male.checked;
	const female = input_female.checked;
	const berth = input_berth.value;
	let isReady = true;
	if (name === "") {
		isReady = false;
		console.log("Name is empty");
	}
	if (age === "" || age === 0) {
		isReady = false;
		console.log("Age is empty");
	}
	if (!male && !female) {
		isReady = false;
		console.log("Please choose either male or female");
	}
	if (!isReady) return;
	callApi();
	async function callApi() {
		let options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				age,
				male,
				female,
				berth
			})
		};
		const response = await fetch("/student-entry", options);
		const res = await response.json();
		console.log(res);
	}
});
