/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter

let year = new Date();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe 

console.log ("ageJohn: " + ageJohn);
console.log ("ageMartk: " + ageMark);