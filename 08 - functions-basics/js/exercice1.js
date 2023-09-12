// Your code goes here
let myArray = [0, 1, 2, 3, 4];

//Somme
function sommeTableau(numbers){
    let initialValue = 0;
    let somme = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return somme;   
}

let resultSomme = sommeTableau(myArray);
console.log(resultSomme)

//Moyenne
function moyenneTableau(numbers){
    let initialValue = 0;
    lenghtArray = myArray.length;
    let somme = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return somme / lenghtArray;    
}
let resultMoyenne = moyenneTableau(myArray);
console.log(resultMoyenne)

//Trouver Max
function maxTableau(numbers){
    let max = numbers.reduce((maxValue, value) => value > maxValue ? value : maxValue, numbers[0]);
    return max;    
}
let resultMax = maxTableau(myArray);
console.log(resultMax);