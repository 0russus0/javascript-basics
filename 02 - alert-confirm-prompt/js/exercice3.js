// Your code goes here
let date = new Date();
let annee = date.getFullYear();

let yearUser = window.prompt( "Quel est votre année de naissance ? :" );

let ageUser = annee - yearUser;

window.alert( `Vous avez ` + ageUser + ' ans.');

