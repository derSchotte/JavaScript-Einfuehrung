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
let text3 = "Deklaration und Initialisierung in einem Schritt";
text2 = text3;

// += ist der Zuweisungsoperator für Addition
// Er addiert den Wert auf der rechten Seite zum Wert auf der linken Seite 
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 += zahl;
// zahl2 = zahl2 + zahl; << das gleiche wie oben

// -= ist der Zuweisungsoperator für Subtraktion
// Er subtrahiert den Wert auf der rechten Seite vom Wert auf der linken Seite
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 -= zahl;

// *= ist der Zuweisungsoperator für Multiplikation
// Er multipliziert den Wert auf der rechten Seite mit dem Wert auf der linken Seite
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 *= zahl;

// /= ist der Zuweisungsoperator für Division
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 /= zahl;

// %= ist der Zuweisungsoperator für Modulo
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und weist den Rest der Division der Variablen auf der linken Seite zu
zahl2 %= zahl;

// ++ ist der Zuweisungsoperator für Inkrementierung
// Er erhöht den Wert der Variablen auf der linken Seite um 1
zahl2++;

// -- ist der Zuweisungsoperator für Dekrementierung
// Er verringert den Wert der Variablen auf der linken Seite um 1
zahl2--;

// Rechenoperatoren
// + ist der Rechenoperator für Addition
// Er addiert den Wert auf der linken Seite zum Wert auf der rechten Seite
// und gibt das Ergebnis zurück
zahl2 + zahl;
zahl2 + 1;
3 + 5;

// - ist der Rechenoperator für Subtraktion
// Er subtrahiert den Wert auf der rechten Seite vom Wert auf der linken Seite
// und gibt das Ergebnis zurück
zahl2 - zahl;
zahl2 - 1;
3 - 5;

// * ist der Rechenoperator für Multiplikation
// Er multipliziert den Wert auf der rechten Seite mit dem Wert auf der linken Seite
// und gibt das Ergebnis zurück
zahl2 * zahl;
zahl2 * 1;
3 * 5;

// / ist der Rechenoperator für Division
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und gibt das Ergebnis zurück
zahl2 / zahl;
zahl2 / 1;
3 / 5;

// % ist der Rechenoperator für Modulo
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und gibt den Rest der Division zurück
zahl2 % zahl;
zahl2 % 1;
3 % 5;

// ** ist der Rechenoperator für Potenzierung
// Er potenziert den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt das Ergebnis zurück
zahl2 ** zahl;
zahl2 ** 1;
3 ** 5;

// Vergleichsoperatoren
// == ist der Vergleichsoperator für Gleichheit
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte gleich sind
// und false zurück, wenn beide Werte ungleich sind
zahl2 == zahl;
zahl2 == 1;
3 == 5;

// === ist der Vergleichsoperator für Identität
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte gleich sind
// und false zurück, wenn beide Werte ungleich sind
// Der Unterschied zum Vergleichsoperator für Gleichheit ist, 
// dass der Vergleichsoperator für Identität auch den Datentyp vergleicht
zahl2 === zahl;
zahl2 === 1;
3 === 5;

// != ist der Vergleichsoperator für Ungleichheit
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte ungleich sind
// und false zurück, wenn beide Werte gleich sind
zahl2 != zahl;
zahl2 != 1;
3 != 5;

// /== ist der Vergleichsoperator für Ungleichheit
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte ungleich sind
// und false zurück, wenn beide Werte gleich sind
// Der Unterschied zum Vergleichsoperator für Ungleichheit ist,
// dass der Vergleichsoperator für Ungleichheit auch den Datentyp vergleicht
zahl2 !== zahl;
zahl2 !== 1;
3 !== 5;

// > ist der Vergleichsoperator für Größer als
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite größer ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite kleiner oder gleich ist als der Wert auf der rechten Seite
zahl2 > zahl;
zahl2 > 1;
3 > 5;

// < ist der Vergleichsoperator für Kleiner als
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite kleiner ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite größer oder gleich ist als der Wert auf der rechten Seite
zahl2 < zahl;
zahl2 < 1;
3 < 5;

// >= ist der Vergleichsoperator für Größer oder gleich
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite größer oder gleich ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite kleiner ist als der Wert auf der rechten Seite
zahl2 >= zahl;
zahl2 >= 1;
3 >= 5;

// <= ist der Vergleichsoperator für Kleiner oder gleich
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite kleiner oder gleich ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite größer ist als der Wert auf der rechten Seite
zahl2 <= zahl;
zahl2 <= 1;
3 <= 5;

// Logische Operatoren
// && ist der logische Operator für Und
