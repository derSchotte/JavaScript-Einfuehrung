// Ein Pop-up-Fenster mit dem Text "Hallo Welt! Ich bin ein Popup!" wird angezeigt
// alert("Hallo Welt! Ich bin ein Popup!");

// Eine Meldung mit dem Text "Hallo Welt! Ich bin eine Meldung in der Konsole!" wird in der Konsole ausgegeben
console.log("Hallo Welt! Ich bin eine Meldung in der Konsole! - Welche in der main.js steht!");


// Variablen in JavaScript sind Datentypunsicher
// Das bedeutet, dass eine Variable verschiedene Datentypen annehmen kann

// let variable = 42;
// let variable = "Hallo Welt!";
// let variable = true;
// let variable = 3.14 + variable;

// In anderen Programmiersprachen ist das nicht der Fall
// Dort muss der Datentyp einer Variablen bei der Deklaration festgelegt werden
// int variable = 42;
// string variable = "Hallo Welt!";
// bool variable = true;

// Variablen können mit var, let oder const deklariert werden
// var ist veraltet und sollte nicht mehr verwendet werden
// let und const sind die aktuellen Standards

// const ist eine Konstante, deren Wert nicht verändert werden kann
const zahl = 21;

// let ist eine Variable, deren Wert verändert werden kann
let zahl2 = 42;

// Variablen können mit einem Wert initialisiert werden
// text ist eine Variable vom Typ string (Zeichenkette), die den Wert "Hallo Welt!" hat.
// Der string wiederum setzt sich aus einzelnen Zeichen zusammen. (Chars oder Characters)
let text = "Hallo Welt!";

// Variablen können auch ohne Wert initialisiert werden
let text2;

// istWahr ist eine Variable vom Typ boolean
// boolean-Variablen können nur die Werte true oder false annehmen
let istWahr = true;

// Zuweisungsoperatoren
// = ist der Zuweisungsoperator
// Er weist der Variablen auf der linken Seite den Wert auf der rechten Seite zu
// Der Wert auf der rechten Seite kann auch eine Variable sein
let text3 = "Initialisierung und Deklaration";
text2 = text3;

// += ist der Zuweisungsoperator für Addition
// Er addiert den Wert auf der rechten Seite zum Wert auf der linken Seite 
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 += zahl;
// zahl2 = zahl2 + zahl; << das gleiche wie oben