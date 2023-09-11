// Your code goes here
let mois = 9;
switch (mois) {
    case 2 || 3 || 4 :
    console.log("printemps");
    break;
    case 5:
    case 6:
    case 7:
    console.log("été");
    break;
    case 8:
    case 9:
    case 10:
    console.log("automne");
    break;
    case 11:
    case 12:
    case 1:
    console.log("hiver");
    break;
        default:
            console.log(`Désolé c'est cassé ${mois}.`);
}