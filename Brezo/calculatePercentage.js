// Calcular porcentajes (segmento*100)/total

var numberOfWomen = prompt("Please, could you tell me how many women are in your class?");
var numberOfMen = prompt("Please, could you tell me how many men are in your class?");

var numberOfStudents = parseInt(numberOfWomen) + parseInt(numberOfMen);

var womenPercent = (numberOfWomen*100)/numberOfStudents;
var menPercent = (numberOfMen*100)/numberOfStudents;

console.log("There are " + numberOfWomen + " women in the class");
console.log("There are " + numberOfMen + " men in the class");
console.log("There are " + numberOfStudents + " students in the class");
console.log("There are " + womenPercent + "% of women in the class");
console.log("There are " + menPercent + "% of men in the class");