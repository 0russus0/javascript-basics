// Your code goes here
let language = "Python";
switch (language) {
    case "Python" :
    console.log("Python a été lancé à l’origine en 1991 et a mis du temps à gagner ses adeptes. Ces dernières années ont pourtant vu un boom dans le classement de Python, en grande partie grâce à ses possibilités dans le Machine Learning, la science des données, et dans l’intelligence artificielle.");
    break;
    case "Javascript":
    console.log("JavaScript est notamment utilisé dans le développement web pour ajouter de l’interactivité à un site, que ce soit sous forme de jeux, de boutons, de styles dynamiques, d’animations et de formulaires.");
    break;
    case "PHP":
    console.log("PHP (officiellement, ce sigle est un acronyme récursif pour PHP Hypertext Preprocessor) est un langage de scripts généraliste et Open Source, spécialement conçu pour le développement d'applications web. Il peut être intégré facilement au HTML.");
    break;
        default:
            console.log(`Désolé c'est cassé ${language}.`);
}