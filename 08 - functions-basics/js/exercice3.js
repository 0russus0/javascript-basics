// Your code goes here
//ajouterPropriete
let user = {
	name: 'Big',
	firstName: 'Jim',
	age: 50,
};
console.log(user + 'toto');
user.job = 'Ninja';
user.none = 'A supprimer';
console.log(user);

//supprimerPropriete
delete user.none;
console.log(user);
