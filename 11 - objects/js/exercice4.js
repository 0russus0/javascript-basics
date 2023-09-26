// Your code goes here

let user2 = {
	name: 'Sherlock',
	firstName: 'Holmes',
	age: 55,
	metier: 'Detective',
};

function introduction() {
	console.log(
		'Bonjour, M. ' +
			this.name +
			' ' +
			this.firstName +
			' a ' +
			this.age +
			' ans.' +
			' et il est : ' +
			this.metier
	);
}
user.introduction = introduction;
user2.introduction = introduction;
user.introduction();
user2.introduction();
