/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

const ERROR_STR_DIV = "Division durch Null? Dein Ernst?";

// module: division a /= b  | test
output(dividieren(3,2));
output(dividieren(3,-2));
output(dividieren(3,0));
output(dividieren(0,5));
output(dividieren(10,2))
function dividieren(a, b) {
    if (b != 0) {
      return a / b;
    }
    else{
        
        return ERROR_STR_DIV;
    }
        

}


// module : multiplication a * b  | test
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));

function multiply(a,b){
    return a * b;
}

//module : subtraktion a - b | test :
// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}


// module : addition a + b | test:

//output(add(3,2));
//output(add(3,-2));
//output(add(3,0));

function add(a,b) {
    return a + b;
}


// module : output | test
//output("hi");
//output(2);
//output(true);
function output(outputData) {
    console.log(outputData);
}
