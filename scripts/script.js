const element = ele => document.querySelector(ele);

let hr = element("#hr");
let mn = element("#mn");
let sc = element("#sc");

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * 6;
	let ss = day.getSeconds() * 6;

	hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;

	// Digital clock
	let hours = element("#hours");
	let minutes = element("#minutes");
	let seconds = element("#seconds");
	let ampm = element("#ampm");

	let h = day.getHours();
	let m = day.getMinutes();
	let s = day.getSeconds();

	let am = h >= 12 ? "PM" : "AM";

	// Convert 24hrs clock to 12hrs clock
	if (h > 12) {
		h -= 12;
	}

	// Add zero before single digit numbers
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	hours.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;
	ampm.innerHTML = am;
});
