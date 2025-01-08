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

ausgabeNamen2("Maria")
ausgabeNamen2("Markus")
ausgabeNamen2("Frank")

function ausgabeNamen2(firstName) {
    console.log("Hallo, " + firstName + "!");
}

