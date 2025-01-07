/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
// new date sollte so aussehen console.log("Datum. " + date)
let date = new Date();
let year = date.getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe 

console.log ("ageJohn: " + ageJohn);
console.log ("ageMartk: " + ageMark);

// Tests 
let isJohnOlder ; // Is John older? y / n --> true | false
isJohnOlder = (ageJohn > ageMark);
let isJohnEqual = (ageJohn == ageMark);

console.log ("isJohnOlder: " + isJohnOlder);
console.log ("isJohnEqual: " + isJohnEqual);