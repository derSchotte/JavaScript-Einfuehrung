let vorName = "Max";
let nachName = "Mustermann";
let alter = 42;

// Konkatination
// Der + Operator kann auch zum Verketten von Strings verwendet werden
// Dabei werden die Strings aneinandergehängt
console.log(vorName + " " + nachName + " ist " + alter + " Jahre alt.");

// Template Strings
// Template Strings sind Strings, die Variablen enthalten können
// Sie werden mit Backticks ( ` ) definiert. (links neben der Backspace-Taste)
// Variablen werden mit ${variable} in den String eingefügt
// Template Strings können auch Zeilenumbrüche enthalten "\n"

console.log(`${vorName} ${nachName} ist ${alter} Jahre alt.`);