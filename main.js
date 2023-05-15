// Zugriff auf das Element mit der ID "container"
let container = document.getElementById("container").innerHTML = `
<h1>Ausgabe:</h1>

<p>Bitte geben Sie die Länge und Breite der zu berechnenden Fläche an</p>
<input type="number" id="laenge" placeholder="Länge">
<input type="number" id="breite" placeholder="Breite">
<button id="BerechnenBTN">Berechnen</button>

<div id="ausgabe"></div>
`;

// FizzBuzz();
//#region FizzBuzz
function FizzBuzz() {
    for (let i = 1; i < 101; i++) {
        // Kann ich i durch 15 restlos teilen? Ja / Nein
        if (i % 15 == 0) {
            document.getElementById("ausgabe").innerHTML += "FizzBuzz<br>";
            // Kann ich i durch 5 restlos teilen? Ja / Nein
        } else if (i % 5 == 0) {
            document.getElementById("ausgabe").innerHTML += "Fizz<br>";
            // Kann ich i durch 3 restlos teilen? Ja / Nein
        } else if (i % 3 == 0) {
            document.getElementById("ausgabe").innerHTML += "Buzz<br>";
            // Führe else aus wenn alle obigen if-Anweisungen false sind.
        } else {
            document.getElementById("ausgabe").innerHTML += `${i}<br>`;
        }
    }
}
//#endregion

//#region Erklaerungen
// WhileScheife();
// DoWhileScheife();
// ForSchleife();



// if (Bedingung) {
//     // Anweisung
// }

// if (Bedingung) {
//     // Anweisung
//     if (Bedingung) {
//         // Anweisung
//     } else {
//         // Anweisung
//     }
// }

// // Bei einer && Abfrage muss jeweils die Linke sowie die Rechte Seite ein true ergeben.
// // Bei einer || Abfrage muss nur eine Seite ein true ergeben.
// if (Bedingung && Bedingung || Bedingung) {
//     // Anweisung
// }

// if (!Bedingung && Bedingung) {
//     // Anweisung
// }


// if (Bedingung) {
//     // Anweisung
// } else {
//     // Anweisung
// }


// if (Bedingung) {
//     // Anweisung
// } else if (Bedingung) {
//     // Anweisung
// } else {
//     // Anweisung
// }


// //for Schleife
// //Variable; if Bedingung; Iteration;
// function ForSchleife() {
//     for (let i = 1; i < 11; i++) {
//         document.getElementById("ausgabe").innerHTML += `${i}<br>`;
//     }
// }

// // for (let i = 0; i < 10; i++) {
// //     // Anweisung
// // }


// // while Schleife
// let x = 0;
// while (x < 10) {
//     document.getElementById("ausgabe").innerHTML += `${i}<br>`;
//     x++;
// }

// // do while Schleife
// let y = 0;

// do {
//     document.getElementById("ausgabe").innerHTML += `${i}<br>`;
//     y++;
// } while (y < 10);













// function WhileScheife() {
//     let i = 1;
//     while (i <= 10) {
//         document.getElementById("ausgabe").innerHTML += `${i}<br>`;
//         i++;
//     }
// }

// function DoWhileScheife() {
//     let i = 1;
//     do {
//         document.getElementById("ausgabe").innerHTML += `${i}<br>`;
//         i++;
//     } while (i <= 10);
// }

//#endregion

//#region Flaeschenberechnung
document.getElementById("BerechnenBTN").addEventListener("click", Berechnung);

function Berechnung() {
    let laenge = parseFloat(document.getElementById("laenge").value);
    let breite = parseFloat(document.getElementById("breite").value);

    var Berechnung = laenge * breite;

    let ergebnis = document.getElementById("ausgabe");

    if (ergebnis !== null) {
        ergebnis.textContent = "Sie haben keine oder unvollständige Werte eingegeben"
    } else {
        ergebnis.textContent = `Das Ergebnis ist: ${Berechnung} cm²`;
    }
}

//#endregion