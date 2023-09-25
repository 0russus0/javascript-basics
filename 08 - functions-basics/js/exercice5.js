// Your code goes here
//## Exercice 5 : Manipulation des Fonctions
function creerFonction(n) {
	n = 1;
	let ajouter5 = n + 5;
	let ajouter10 = ajouter5 + 10;
	return ajouter10;
}
let number = creerFonction();
console.log(number);

//Version de Romain nettement meilleure
function creerFonction(n) {
	function ajouterN(x) {
		return x + n;
	}

	return ajouterN;
}

const ajouter5 = creerFonction(5);
let resultat = ajouter5(10);
console.log(resultat);

const ajouter10 = creerFonction(10);
let result = ajouter10(2);
console.log(result);
