/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Division durch Null? Dein Ernst?";
const ERROR_STR_CAL = "Dedüm"

//module : Calculator | tests:
//agreement : "+";"-";"*";":";"/";
/*  output(calculator(3,2,"+"));
 output(calculator(3,2,"-"));
 output(calculator(3,2,"*"));
 output(calculator(3,2,":"));
 output(calculator(3,2,"/"));
 output(calculator(3,0,"/"));
 output(calculator(3,2,"#?!")); */
function calculator(a,b,op) {   // op hier für Operator
    switch (op) {
        case "+":       // addieren
            return add(a,b);
        case "-":    // subtrahieren
            return subtract(a,b);
        case "*":    // multiplizieren
            return multiply(a,b);
        case ":":   //dividieren
        case "/":   
            return dividieren(a,b);
        default:
                return ERROR_STR_CAL;
    }
}


// module: division a /= b  | test
/* output(dividieren(3,2));
output(dividieren(3,-2));
output(dividieren(3,0));
output(dividieren(0,5));
output(dividieren(10,2)); */
function dividieren(a, b) {
    if (b == 0) {
       return ERROR_STR_DIV;
    }
       return a / b;
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
