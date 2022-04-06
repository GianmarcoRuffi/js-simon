// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creazione numeri

let numbers = [];
while (numbers.length < 5) {
  let r = Math.floor(Math.random() * 100) + 1;
  if (numbers.indexOf(r) === -1) numbers.push(r);
}

// Print numeri

document.getElementById("random-numbers").innerHTML =
  "Memorizza i seguenti numeri entro 30 secondi: " + numbers;

console.log(numbers);

//Timer

let timeLeft = 5;
let quizTimer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(quizTimer);
    document.getElementById("countdown").innerHTML = "Ora riscrivi i numeri!";
    document.getElementById("random-numbers").style.display = "none";
  } else {
    document.getElementById("countdown").innerHTML =
      "Ti rimangono " + timeLeft + " secondi.";
  }
  timeLeft -= 1;
}, 1000);

// Push numeri

let arr = []; // define our array

for (let i = 0; i < 5; i++) {
  // loop 10 times
  arr.push(
    prompt(
      "Riscrivi i numeri appena visualizzati uno alla volta! Sei al numero: " +
        (i + 1)
    )
  ); // push the value into the array
}

console.log("Full array: " + arr.join(", "));
