/****** FUNktionen 01 ****/
// ^. Kapselung von Codeblöcken


// Funktionsaufruf | call
//test();

// Funktionsrumpf | callee
// Funktionsdeklaration
//function test()
//{
//console.log (" Manuel Markus!");
//}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//ausgabeNamen();  // call

function ausgabeNamen() {

        // inerne Variable | What happens in Vegas...
    let firstName = "Manuel";
    console.log("Hallo, " + firstName + "!");
    
}

// console.log (firstName);  Fehler : scope!


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN


//function ausgabeNamen2(params)  {
  //  let firstName = "Max";
    //console.log("Hallo, " + firstName + "!");


//}

//ausgabeNamen2("Maria")
//ausgabeNamen2("Markus")
//ausgabeNamen2("Frank")

function ausgabeNamen2(firstName) {
    console.log("Hallo, " + firstName + "!");
}


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

//ausgabeNamenParams("Max", "Mütze");

//const prompt = require('prompt-sync')({sigint: true});
//ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping

function ausgabeNamenParams(firstName, secondName) {
    console.log("Hallo, " + firstName + " " + secondName +"!");
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, secondName) {

    //1. Funktionalität: string composing
    // GAP_Test // Camel Case
    const GAP = " ";
    let outputStr = "Hallo, " + GAP + firstName + GAP + secondName +"!"
    console.log(outputStr);
}

/******** Funktionen 03b ********/
