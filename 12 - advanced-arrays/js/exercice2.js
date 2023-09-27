// Your code goes here
//### Exercice 2 : Accès aux Éléments

for (let i = 0; i < tableau.length; i++) {
	console.log('\nDonnée : ', i);
	for (let j = 0; j < tableau[i].length; j++) {
		console.log(tableau[i][j]);
	}
}
console.log(tableau);
console.log('Acces 1 ' + tableau[(1, 1)]);
console.log('Acces 2 ' + tableau[[2]]);
