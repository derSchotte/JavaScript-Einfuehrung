import "./testLab.js";

// Zugriff auf das Element mit der ID "container"
let container = document.getElementById("container").innerHTML = `
<div id="app">
    <div id="title">
        <h1>Simple Calc</h1>
    </div>
    <div id="body">
        <div id="eingabe">
        <label>Zahl 1:</label>
        <input type="number" id="zahl1" placeholder="Zahl 1">
        <label>Zahl 2:</label>
        <input type="number" id="zahl2" placeholder="Zahl 2">
        <div class="operator">
        <label>Operator:</label>
            <select id="operator">
                <option value="">Bitte wählen</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
        </div>
        <button id="berechnen" onclick="calculator()">Berechnen</button>
        </div>
        <div id="ergebnis"></div>
    </div>
</div>
`;

{/* <h1>Ausgabe:</h1>
<div id="ausgabe"></div>

<label>EMail:</label>
<input type="email" id="email" placeholder="E.Mail@yourDomain.com">
<label>EMail Wiederholen:</label>
<input type="email-correct" id="email" placeholder="E.Mail@yourDomain.com">
<div id="ergebnis"></div> */}

{/* <div class="email">
            <label>Email</label>
            <input type="email" id="email" />
        </div> */}

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
{/* <p>Bitte geben Sie die Länge und Breite der zu berechnenden Fläche an</p>
<input type="number" id="laenge" placeholder="Länge">
<input type="number" id="breite" placeholder="Breite">
<button id="BerechnenBTN">Berechnen</button>



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
} */}

//#endregion

//#region Uhrzeit
// Uhrzeit ausgeben
// function Uhrzeit() {
//     var element = document.getElementById("ausgabe");
//     var jetzt = new Date();
//     var stunden = jetzt.getHours();
//     var minuten = jetzt.getMinutes();
//     var sekunden = jetzt.getSeconds();

//     if (stunden < 10) {
//         stunden = "0" + stunden;
//     }

//     if (minuten < 10) {
//         minuten = "0" + minuten;
//     }

//     if (sekunden < 10) {
//         sekunden = "0" + sekunden;
//     }

//     var timeString = `${stunden}:${minuten}:${sekunden}`;
//     element.textContent = timeString;
// }

// setInterval(Uhrzeit, 1000);

//#endregion

// #region Taschenrechner
// function calculator
document.getElementById("berechnen").addEventListener("click", calculator);

function calculator() {
    let zahl1 = parseFloat(document.getElementById("zahl1").value);
    let zahl2 = parseFloat(document.getElementById("zahl2").value);
    let operator = document.getElementById("operator").value;

    let ergebnis = document.getElementById("ergebnis");

    // Check if input values are valid
    if (isNaN(zahl1) || isNaN(zahl2)) {
        ergebnis.textContent = "Bitte geben Sie gültige Zahlen ein";
        return;
    }

    // Perform calculation based on operator
    if (operator == "+") {
        ergebnis.textContent = zahl1 + zahl2;
    } else if (operator == "-") {
        ergebnis.textContent = zahl1 - zahl2;
    } else if (operator == "*") {
        ergebnis.textContent = zahl1 * zahl2;
    } else if (operator == "/") {
        if (zahl2 == 0) {
            ergebnis.textContent = "Division durch Null ist nicht erlaubt";
            return;
        }
        ergebnis.textContent = zahl1 / zahl2;
    } else {
        ergebnis.textContent = "Bitte geben Sie einen gültigen Operator ein";
    }
}
//#endregion

//#region Email-Adresse überprüfen
let emailInput = document.getElementById("email");
emailInput.addEventListener("input", checkEmail);

function checkEmail() {
    let email = document.getElementById("email").value;
    let ergebnis = document.getElementById("ergebnis");

    if (email != "") {
        if (email.indexOf("@") !== -1 && email.lastIndexOf(".") !== -1 && email.lastIndexOf(".") > email.indexOf("@")) {
            ergebnis.textContent = "Gültige Email-Adresse!";
        } else {
            ergebnis.textContent = "Keine gültige Email-Adresse ein!";
        }
    }
}

//#endregion