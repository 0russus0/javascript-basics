// Your code goes here
//Recherche d'un Élément
let elements = ['caratères', 1935, '1955', 2, 'coucou'];
console.log(elements);
let elementRecherche = 'coucou';
console.log(elementRecherche + ' test');
elm = elements[i];
console.log(elm);
let cmpt = 0;
let arrayLength = elements.length;
while (cmpt < arrayLength) {
	if (elm === elementRecherche[i]) {
		console.log("L'élément recherché est bien " + elementRecherche);
	} else {
		cmpt++;
	}
}
