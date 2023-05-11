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


//#region Zuweisungsoperatoren
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
//#endregion

//#region Vergleichsoperatoren
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
//#endregion

//#region Rechenoperatoren
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
//#endregion

//#region Logische Operatoren
// Logische Operatoren
// && ist der logische Operator für Und
// Er gibt true zurück, wenn beide Werte true sind
// und false zurück, wenn mindestens einer der beiden Werte false ist
istWahr && true;
istWahr && false;

// || ist der logische Operator für Oder
// Er gibt true zurück, wenn mindestens einer der beiden Werte true ist
// und false zurück, wenn beide Werte false sind
istWahr || true;
istWahr || false;

// ! ist der logische Operator für Nicht
// Er gibt true zurück, wenn der Wert false ist
// und false zurück, wenn der Wert true ist
!istWahr;
//#endregion


// Scheifen
// for-Schleife
// Die for-Schleife wird verwendet, wenn die Anzahl der Durchläufe bekannt ist

// Die for-Schleife besteht aus drei Teilen:
// 1. Initialisierung
// 2. Bedingung
// 3. Inkrementierung

// Die Initialisierung wird einmal ausgeführt, bevor die Schleife startet
// Die Bedingung wird vor jedem Durchlauf überprüft
// Wenn die Bedingung true zurückgibt, wird der Schleifenkörper ausgeführt
// Wenn die Bedingung false zurückgibt, wird die Schleife beendet
// Die Inkrementierung wird nach jedem Durchlauf ausgeführt

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Die Inkrementierung kann auch vor dem Durchlauf ausgeführt werden
// Gleiches gilt für die anderen Anwendungsbeispiele
for (let i = 0; i < 10; ++i) {
    console.log(i);
}

// Die for-Schleife kann auch rückwärts laufen
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// Die for-Schleife kann auch mit Variablen arbeiten
let anzahlDurchlaeufe = 10;
for (let i = 0; i < anzahlDurchlaeufe; i++) {
    console.log(i);
}

// Die Inkrementierung kann auch innerhalb der Schleife erfolgen
for (let i = 0; i < 10;) {
    console.log(i);
    i++;
}

// Die Bedingung kann auch innerhalb der Schleife erfolgen
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}

// While-Schleife
// Die While-Schleife wird verwendet, wenn die Anzahl der Durchläufe nicht bekannt ist
// Die Bedingung wird vor jedem Durchlauf überprüft
// Wenn die Bedingung true zurückgibt, wird der Schleifenkörper ausgeführt
// Wenn die Bedingung false zurückgibt, wird die Schleife beendet
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// Do-While-Schleife
// Die Do-While-Schleife wird verwendet, wenn die Anzahl der Durchläufe nicht bekannt ist
// Der Schleifenkörper wird mindestens einmal ausgeführt
// Die Bedingung wird nach jedem Durchlauf überprüft
// Wenn die Bedingung true zurückgibt, wird der Schleifenkörper erneut ausgeführt
// Wenn die Bedingung false zurückgibt, wird die Schleife beendet
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);