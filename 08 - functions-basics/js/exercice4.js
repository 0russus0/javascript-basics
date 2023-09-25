// Your code goes here
// Exercice 4 : Gestion des Dates
function afficherDate(date) {
	date = new Date();
	let dateLocale = date.toLocaleString('fr-FR', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	});
	return dateLocale;
}
let today = afficherDate();
console.log(today);

function calculerAge(birthYear, date) {
	birthYear = 1978;
	date = new Date();
	let year = date.getFullYear();
	let age = year - birthYear;
	return age;
}

let old = calculerAge();
console.log(old);
