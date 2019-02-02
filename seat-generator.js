var names = ['Veli', 'Mustafa', 'Salman', 'Sami', 'Hamza'];
var seats = [];

async function seatGenerator() {
	seats = [];
	let tempName = names.slice();
	while (seats.length !== 5) {
		var random = tempName[Math.floor(Math.random() * tempName.length)];
		seats.push(random);
		var index = tempName.indexOf(random);
		if (index > -1) {
			tempName.splice(index, 1);
		}
	}
	document.getElementById("seats").innerHTML = seats;
}