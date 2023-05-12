// Zugriff auf das Element mit der ID "container"
let container = document.getElementById("container").innerHTML = `
<h1>Ausgabe:</h1>
<p>Erstelle ein JavaScript Programm, welches die Zahlen von 1 bis 100 ausgibt. Bei jeder Zahl, welche durch 3 teilbar ist, soll "Fizz" ausgegeben werden. Bei jeder Zahl, welche durch 5 teilbar ist, soll "Buzz" ausgegeben werden. Bei jeder Zahl, welche durch 3 und 5 teilbar ist, soll "FizzBuzz" ausgegeben werden.</p>
<div id="ausgabe"></div>
`;

FizzBuzz();
// WhileScheife();
// DoWhileScheife();
// ForSchleife();

let email;
let email2;


if (Bedingung) {
    // Anweisung
}

if (Bedingung) {
    // Anweisung
    if (Bedingung) {
        // Anweisung
    } else {
        // Anweisung
    }
}

// Bei einer && Abfrage muss jeweils die Linke sowie die Rechte Seite ein true ergeben.
// Bei einer || Abfrage muss nur eine Seite ein true ergeben.
if (Bedingung && Bedingung || Bedingung) {
    // Anweisung
}

if (!Bedingung && Bedingung) {
    // Anweisung
}


if (Bedingung) {
    // Anweisung
} else {
    // Anweisung
}


if (Bedingung) {
    // Anweisung
} else if (Bedingung) {
    // Anweisung
} else {
    // Anweisung
}


//for Schleife
//Variable; if Bedingung; Iteration;
function ForSchleife() {
    for (let i = 1; i < 11; i++) {
        document.getElementById("ausgabe").innerHTML += `${i}<br>`;
    }
}

// for (let i = 0; i < 10; i++) {
//     // Anweisung
// }


// while Schleife
let x = 0;
while (x < 10) {
    document.getElementById("ausgabe").innerHTML += `${i}<br>`;
    x++;
}

// do while Schleife
let y = 0;

do {
    document.getElementById("ausgabe").innerHTML += `${i}<br>`;
    y++;
} while (y < 10);













function WhileScheife() {
    let i = 1;
    while (i <= 10) {
        document.getElementById("ausgabe").innerHTML += `${i}<br>`;
        i++;
    }
}

function DoWhileScheife() {
    let i = 1;
    do {
        document.getElementById("ausgabe").innerHTML += `${i}<br>`;
        i++;
    } while (i <= 10);
}

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            document.getElementById("ausgabe").innerHTML += "FizzBuzz<br>";
        } else if (i % 3 == 0) {
            document.getElementById("ausgabe").innerHTML += "Fizz<br>";
        } else if (i % 5 == 0) {
            document.getElementById("ausgabe").innerHTML += "Buzz<br>";
        } else {
            document.getElementById("ausgabe").innerHTML += i + "<br>";
        }
    }
}
