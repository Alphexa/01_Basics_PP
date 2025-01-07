/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// Schritt 1: Name eingeben
const name = "Maximilian-Armin-Harald"; // Ändere den Namen direkt hier im Code

// Schritt 2: Alter eingeben 
const ageInput = "88"; // Ändere das Alter direkt hier im Code

// Schritt 3: Alter in eine Zahl umwandeln
const age = Number(ageInput);

// Schritt 4: Alter prüfen und Getränk zuordnen
if (typeof age === "number" && age >= 0) { // Alter muss eine gültige Zahl >= 0 sein
    let drink; // Variable, um das Getränk zu speichern

    // Getränkeauswahl basierend auf alter
    if (age >= 0 && age < 6) {
        drink = "Milch";
    } else if (age >= 6 && age <= 12) {
        drink = "Saft";
    } else if (age >= 13 && age <= 17) {
        drink = "Cola";
    } else {
        drink = "Wein";
    }

    // Ausgabe: Name + Getränk
    console.log(`${name} trinkt ${drink}.`);
} else {
    // Fehlerausgabe für ungültiges Alter
    console.log("Ungültige Eingabe. Alter muss eine Zahl größer als 0 sein.");
}
