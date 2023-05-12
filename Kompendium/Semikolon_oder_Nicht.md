### Semicolon oder nicht?

Wie auch in anderen Programmiersprachen nutzt JavaScript Semikolons ';' um Anweisungen voneinander zu trennen. Allerdings ist es in JavaScript nicht zwingend notwendig ein Semikolon zu setzen. JavaScript versucht automatisch zu erkennen wo ein Semikolon gesetzt werden muss.

Das setzten des Semikolons ist allerdings Wichtig, um Anweisungen von einander zu trennen wo es nötig ist. Weiter wird durch die Verwendung von Semikolons der Code lesbarer. Ohne dieses trennen der Anweisungen kann es scheinen das dass Ende einer Anweisung, der Anfang einer neuen Anweisung ist.

Normalerweise kann man zwischen zwei Anweisungen das Semikolon weglassen. Wenn diese jeweils eine eigene Zeile haben. Viele JavaScript-Programmierer, so wie ich auch, setzen das Semikolon immer am Ende einer Anweisung. Auch dort, wo es eigentlich nicht nötig wäre.

Es gibt aber auch den umgekehrten Stil, das Semikolon immer wegzulassen. Ausser an den Stellen wo es benötigt wird. Abgesehen davon für welchen Stil man sich entscheidet. Sollte nun Verständlich sein wann ein Semikolon gesetzt werden muss und wann nicht.

Anschließend ein paar Beispiele für die Verwendung von Semikolons:

_Im unteren Beispiel kann man im Grunde das erste Semikolon weglassen. Da die Anweisungen auf zwei Zeilen stehen._

```javascript
x = 0; <-- Optionales Semikolon
y = 0;
```

_Wenn man aber Anweisungen, wie unten gezeigt, schreiben würde._
_Dann, ist es notwenig das Semikolon zu setzen. Da es ansonnsten zu Fehlern kommen wird_

````javascript

```javascript
x = 0; y = 0;
````

Im nachfolgenden Beispiel, scheint es als würden zwei Anweisungen existieren.

```javascript
var anweisung = x + y + f(x + y).toString();
```

Alledings Interpretiert JavaScript den obigen Code wie folgt:

```javascript
var anweisung = x + y + f(x + y).toString();
```
