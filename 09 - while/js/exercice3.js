// Your code goes here
//Recherche d'un Élément
let elements = ['caratères', 1935, '1955', 2, 'coucou'];
let arrayLength = elements.length;
let elementRecherche = 'coucou';
elm = elements[0];

let cmpt = 0;

while (cmpt < arrayLength) {
	if (elements.includes(elementRecherche)) {
		console.log("L'élément recherché est bien " + elementRecherche);
		break;
	} else {
		cmpt++;
	}
}
