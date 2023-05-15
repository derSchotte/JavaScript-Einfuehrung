Programme, Apps, Spiele etc. basieren auf der Manipulation von Werten wie z.B. der Zahl PI 3.14...
Oder aber auch Text wie z.B. "Hallo Welt!". Diese Werte werden in Variablen gespeichert. Variablen sind Container für Werte. Diese Werte können dann in einem Programm verwendet werden. Variablen können auch zur Laufzeit verändert werden. Die Werte die in einer Programmiersprache verwendet werden, nennt man Typen. Wenn ein Programm, Werte verarbeiten soll, muss es wissen um welchen Typ es sich handelt. Es gibt verschiedene Typen von Werten. Einen Auszug der wichtigsten Typen sind:

```quote
- String
- Number
- Boolean
- Array
- Object
- Function
- Symbol
- undefined
- null
- NaN
- ....
```

Diese Werte werden dann in einer Variable gespeichert oder weist diese einer Variable zu. Eine Variable wird durch einen "symbolischen" Namen definiert um über diesen, den Wert der Variable zu referenzieren.

Die Typen von JavaScript können generell in zwei Kategorien eingeteilt werden. Primitive Typen (Elementare Typen) und Objekt Typen (Komplexe Typen). Zu den primitiven Typen gehören z.B. String, Zahlen, Booleans, null und undefined. Zu den Objekt Typen gehören z.B. Arrays, Funktionen und Objekte.

In Javascript gibt es allerdings keine direkte Typzuweisung bei Variablen. Die Typen werden implizit zugewiesen. Das bedeutet, dass der Typ der Variable automatisch erkannt wird. Der Typ einer Variable kann sich auch zur Laufzeit ändern. Das bedeutet, dass eine Variable zuerst einen String enthalten kann und später einen Boolean. Das ist aber nicht zu empfehlen. _Es ist besser, wenn eine Variable immer den gleichen Typ hat._ Das erleichtert die Lesbarkeit des Codes und verhindert Fehler.

Zu beachten ist auch die Unterscheidung von globalen Variablen oder Funktionsbezogenen Variablen. Variablen die außerhalb einer Funktion definiert werden, sind global. Variablen die innerhalb einer Funktion definiert werden, sind funktionsbezogen. Variablen die innerhalb einer Funktion definiert werden, können nur innerhalb dieser Funktion verwendet werden. Variablen die außerhalb einer Funktion definiert werden, können überall verwendet werden. Variablen die innerhalb einer Funktion definiert werden, können auch den gleichen Namen haben wie Variablen die außerhalb einer Funktion definiert werden. Diese Variablen sind dann aber nicht die gleichen. Sie sind nur zufällig gleich benannt. Variablen die innerhalb einer Funktion definiert werden, überschreiben nicht die Variablen die außerhalb einer Funktion definiert werden. Variablen die außerhalb einer Funktion definiert werden, können aber von Funktionen verwendet werden. Variablen die innerhalb einer Funktion definiert werden, können nicht von außerhalb der Funktion verwendet werden.

```javascript
let goblaleVariable = 'global';

function test() {
    let lokaleVariable = 'lokal';
    console.log(goblaleVariable); // Ausgabe: global
    console.log(lokaleVariable); // Ausgabe: lokal
}
```

## Zahlen

Anders als in manch anderen Programmiersprachen, macht JavaScript keinen Unterschied zu "Ganzzahlen" (Integer oder kurz int) und "Flieskommazahlen" (float). In JavaScript werden alle Zahlen als Flieskommazahlen dargestellt. Welche dann als 64-Bit-Gleitkommazahl nach IEEE-Standard 754 definiert werden. Wobei hier zu beachten ist das JavaScript bestimmte Operationen, wie die Indizierung von Arrays als 32-Bit-Gleitkommazahl berechnet. Das bedeutet, dass es zu Rundungsfehlern kommen kann. Beachten Sie bitte das jedem Zahlliteral ein Minuszeichen (-) vorangestellt werden kann. Um die Zahl negativ darzustellen. Wenn kein Minuszeichen vorangestellt wird, ist die Zahl positiv.

```quote
# Zahlliteral

Eine Zahl in einem JavaScript Code wird als Zahlliteral bezeichnet.
Ein Zahlliteral ist ein Ausdruck in der Programmierung, der eine feste numerische Wert darstellt.
Es ist eine Möglichkeit, eine Zahl direkt im Quellcode zu schreiben,
anstatt sie aus einer Variablen oder einem anderen Ausdruck abzuleiten.

In der Regel werden Zahlliterale verwendet, um Konstanten oder fest definierte Werte in den Code einzubetten.
Zum Beispiel könnte man ein Zahlliteral verwenden, um die Anzahl der Elemente in einer Liste oder die Größe eines Arrays anzugeben.
In vielen Programmiersprachen gibt es auch verschiedene Arten von Zahlliteralen,
wie z.B. Ganzzahlen, Gleitkommazahlen oder Hexadezimalzahlen.

# Ganzzahlen
1024

# Gleitkommazahlen
~Bitte daran Denken das innerhalb von Programm-Code das Komma als Punkt angegeben wird. Es wird nur Umgangssprachlich als Komma bezeichnet.~
3.14

# Hexadezimalzahlen
0xFF = 255

# Binärzahlen
0b1010 = 10
```

In JavaScript arbeiten Zahlen mit den RechenOperatoren oder besser bekannt als Arithmetische Operatoren. Diese Operatoren finden Sie in der grundlagen.js. Dort werden diese auch genauer erklärt.

Es gibt auch komplexe Mathematische Operatoren in JavaScript und anderen Programmiersprachen. Hier ein kurzer Auszug der wichtigsten Mathematischen Operatoren:

```quote
# Mathematische Operatoren
Math.pow(2,53) => 9007199254740992 // 2 hoch 53
Math.round(.6) => 1 // Rundet auf
Math.ceil(.6) => 1 // Rundet auf
Math.floor(.6) => 0 // Rundet ab
Math.abs(-5) => 5 // Betrag einer Zahl. Der Wert wird immer positiv dargestellt.
Math.max(1,2,3) => 3 // Gibt den höchsten Wert zurück
Math.min(1,2,3) => 1 // Gibt den niedrigsten Wert zurück
Math.random() => 0.123456789 // Gibt eine Zufallszahl zwischen 0 und 1 zurück
Math.PI => 3.141592653589793 // Gibt die Zahl PI zurück
Math.E => 2.718281828459045 // Gibt die Eulersche Zahl zurück
Math.sqrt(3) => 1.7320508075688772 // Gibt die Quadratwurzel zurück
Math.pow(3, 1/3) => 1.4422495703074083 // Gibt die Kubikwurzel zurück
Math.sin(0) => 0 // Gibt den Sinus zurück
Math.log(10) => 2.302585092994046 // Gibt den Logarithmus zurück
Math.log(100)/Math.LN10 => 2.302585092994046 // Gibt den Logarithmus zurück
Math.log(512)/Math.LN2 => 9 // Gibt den Logarithmus zurück
Math.exp(3) => 20.085536923187668 // Gibt den Exponenten zurück
```

In JavaScript werden keine Fehler ausgegeben bei arithmetischen Operatoren, sobald es zu positiven oder negativen Wertüberläufen kommt. Ist das Ergebnis einer Operation, eine Zahl die größer als die größte darstellbare Zahl ist. So ist das Ergebnis ein spezieller Wert von Unendlich. Und wird in JavaScript als "Infinity" angezeigt. Sollte es sich um eine negative Zahl handeln dann "-infinity". Ebenfalls wirft die Division durch Null kein Fehler. Sie liefert auch einen Wert von "Infinity" oder "-Infinity" zurück. Allerdings gibt es eine Ausnahme, wenn man Null durch null teilt. Dann wird der Wert "NaN" zurückgegeben. "NaN" steht für "Not a Number". Das bedeutet, dass das Ergebnis der Operation nicht als Zahl dargestellt werden kann.

NaN hat in JavaScript eine Sonderstellung. Dieser Wert ist keinem anderen gleich, nicht einmal zu sich selbst.
Bedeutet man kann den Wert von NaN nicht mit "x == NaN" prüfen. Stattdessen sollte man "x != x" verwenden. Dieser Wert ist nur dann Wahr, wenn x gleich NaN ist. Alternativ dazu kann man auch "isNaN(x)" verwenden. isNaN prüft ob der Wert von x nicht eine Zahl ist. Wenn der Wert von x keine Zahl ist, dann ist das Ergebnis von isNaN wahr. Wenn der Wert von x eine Zahl ist, dann ist das Ergebnis von isNaN falsch.

## Text

Text oder Strings sind in JavaScript eine Sequenz von Unicode-Zeichen. Unicode ist ein internationaler Standard, der fast alle Schriftzeichen der Welt enthält. Ein String setzt sich aus einzelnen Zeichen, den sogenannten Chars zusammen. Welche dann in einem String Konkateniert werden.

```quote
# String Konkatenation
let string = 'Hallo' + ' ' + 'Welt' + '!';

# Chars in Strings Konkatenieren
let string = 'H' + 'a' + 'l' + 'l' + 'o' = 'Hallo';
```

## Stringliterale

In einem Programm können Stringliterale in einfache oder doppelte Anführungszeichen eingeschlossen werden (' oder "). Stringliterale in einfachen Anführungszeichen können in Doppelte Anführungszeichen eingeschlossen werden und umgekehrt.

```quote
# Stringliteral in einfachen Anführungszeichen
let string = 'Hallo Welt!';

# Stringliteral in doppelten Anführungszeichen
let string = "Hallo Welt!";

# Stringliteral in einfachen Anführungszeichen mit doppelten Anführungszeichen
let string = 'Hallo "Welt"!';

# Stringliteral in doppelten Anführungszeichen mit einfachen Anführungszeichen
let string = "Hallo 'Welt'!";
```

Das Backslash-Zeichen ( \ ) hat in Javascript und anderen Programmiersprachen einen besonderen Zweck. Es wird als Escape-Zeichen bezeichnet. Das bedeutet, dass das Zeichen, welches nach dem Backslash-Zeichen folgt, eine besondere Bedeutung hat. Es gibt verschiedene Escape-Sequenzen. Die wichtigsten sind:

```quote
# Escape-Sequenzen
\' = Ein einfaches Anführungszeichen
\" = Ein doppeltes Anführungszeichen
\\ = Ein Backslash-Zeichen
\n = Ein Zeilenumbruch
\r = Ein Wagenrücklauf
\t = Ein Tabulator
\b = Ein Backspace
\f = Ein Seitenumbruch
\v = Ein vertikaler Tabulator
\0 = Das Nullzeichen (NUL)
\XXX = Das Zeichen mit dem achten Bitwert XXX
\xXX = Das Zeichen mit dem Hexadezimalwert XX
\uXXXX = Das Unicode-Zeichen mit dem Hexadezimalwert XXXX
\u{XXXXX} = Das Unicode-Zeichen mit dem Hexadezimalwert XXXXX
```

Steht das \ Zeichen vor einem anderen Zeichen als in denen in den Escape-Sequenzen. Dann wird das \ Zeichen ignoriert und das andere Zeichen wird als normales Zeichen behandelt.

Was aber nicht bedeutet das es in Zukunft nicht weitere Escape-Sequenzen geben wird.
