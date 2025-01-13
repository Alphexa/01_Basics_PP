/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));



// Funktion zur Satzbildung
function getSentence(wordsArray, sentenceType) {
    const GAP = " "; // Leerzeichen zwischen Wörtern
    let punctuation = "."; // Standard: Punkt (für "S")

    // Satzzeichen basierend auf Satzart zuweisen
    if (sentenceType === "Q") {
        punctuation = "?"; // Fragezeichen
    } else if (sentenceType === "E") {
        punctuation = "!"; // Ausrufezeichen
    }

    // Array in einen Satz zusammenfügen
    let sentence = wordsArray.join(GAP) + punctuation;

    return sentence;
}

// Funktion zur Ausgabe des Ergebnisses
function output(result) {
    console.log(result);
}

// Tests
/* output(getSentence(["Ich", "bin", "Max"], "S")); // Ich bin Max.
output(getSentence(["Bist", "du", "Max"], "Q")); // Bist du Max?
output(getSentence(["Ich", "bin"], "E")); // Ich bin!
output(getSentence(
    ["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"],
    "Q"
)); // Ich hätt gern die Platt von dene zwei diwodaso Spass mache, habbe Sie die?
 */



// Funktion zur Satzbildung
function getSentence(wordsArray, sentenceType) {
    const GAP = " "; // Leerzeichen zwischen Wörtern
    let punctuation = "."; // Standard: Punkt (für "S")

    // Satzzeichen basierend auf Satzart zuweisen
    if (sentenceType === "Q") {
        punctuation = "?"; // Fragezeichen
    } else if (sentenceType === "E") {
        punctuation = "!"; // Ausrufezeichen
    }

    // Array in einen Satz zusammenfügen
    let sentence = wordsArray.join(GAP) + punctuation;

    return sentence;
}

// Funktion zur Ausgabe des Ergebnisses
function output(result) {
    console.log(result);
}

// Tests
output(getSentence(["Ich", "bin", "Max"], "S")); // Ich bin Max.
output(getSentence(["Bist", "du", "Max"], "Q")); // Bist du Max?
output(getSentence(["Ich", "bin"], "E")); // Ich bin!
output(getSentence(
    ["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"],
    "Q"
)); // Ich hätt gern die Platt von dene zwei diwodaso Spass mache, habbe Sie die?




// Funktion zur Satzbildung ohne join
function getSentence(wordsArray, sentenceType) {
    const GAP = " "; // Leerzeichen zwischen den Wörtern
    let punctuation = "."; // Standard: Punkt (für "S")
    let sentence = ""; // Initialisierter leerer Satz

    // Satzzeichen basierend auf Satzart zuweisen
    if (sentenceType === "Q") {
        punctuation = "?"; // Fragezeichen
    } else if (sentenceType === "E") {
        punctuation = "!"; // Ausrufezeichen
    }

    // Wörter aus dem Array zu einem Satz zusammensetzen
    for (let i = 0; i < wordsArray.length; i++) {
        sentence += wordsArray[i]; // Wort hinzufügen

        // Kein Leerzeichen nach dem letzten Wort
        if (i < wordsArray.length - 1) {
            sentence += GAP; // Leerzeichen zwischen den Wörtern
        }
    }

    // Satzzeichen hinzufügen
    sentence += punctuation;

    return sentence;
}

// Funktion zur Ausgabe des Ergebnisses
function output(result) {
    console.log(result);
}

// Tests
output(getSentence(["Ich", "bin", "Max"], "S")); // Ich bin Max.
output(getSentence(["Bist", "du", "Max"], "Q")); // Bist du Max?
output(getSentence(["Ich", "bin"], "E")); // Ich bin!
output(getSentence(
    ["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"],
    "Q"
)); // Ich hätt gern die Platt von dene zwei diwodaso Spass mache, habbe Sie die?
