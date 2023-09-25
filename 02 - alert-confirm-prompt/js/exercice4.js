// Your code goes here
let tasks = [];

function taskmanager() {
	let answer = prompt(`Que voulez-vous faire?"add" "delete" ou "display"
\n "add" => ajouter une tâche
\n "delete" => ajouter une tâche
\n "display" => ajouter une tâche
\n "exit" => sortie`);

	console.log(answer);
	if (answer == 'add') {
		let oneTask = prompt('Quelle tâche voulez-vous ajouter ?');
		tasks.push(oneTask + '\n');
	} else if (answer == 'delete') {
		tasks.pop();
	} else if (answer == 'display') {
	} else {
		alert(`Mauvaise manip !`);
	}
	if (answer == 'add' || answer == 'delete' || answer == 'display') {
		alert(tasks);
	}

	taskmanager();
}

taskmanager();
