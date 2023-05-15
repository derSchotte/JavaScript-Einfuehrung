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
```
