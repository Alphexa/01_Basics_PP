
// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 36;
const ageMark = 36;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

//if(true)
//if (false)
//if (isJohnOlder)
//if (ageJohn > ageMark)
//{
  //  console.log("John ist älter!");


  //}/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

//if (true) { 
    //if(true)
//if (false)
//if (isJohnOlder)

// if-ELSE-IF
// switch / case


//if (ageJohn > ageMark)
// {   console.log("John ist älter!");
// } 
// else 
// {
//    console.log("John ist jünger!");
//
//}

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder)
    {
        console.log("John ist älter!");
    } 

    else if (isJohnEqual)
    {
        // Alternativer IF-Zweig 1 . . n (weitere Fälle)

        console.log ("John ist gleich alt!");

    }

        // Gemeinsame Alternative

    else 
    {
        console.log("John ist jünger!");
    }
    
