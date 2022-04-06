// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let numbers = [];
while (numbers.length < 5) {
  let r = Math.floor(Math.random() * 100) + 1;
  if (numbers.indexOf(r) === -1) numbers.push(r);
}

document.getElementById("random-numbers").innerHTML =
  "Memorizza i seguenti numeri entro 30 secondi: " + numbers;

console.log(numbers);

let timeLeft = 10;
let quizTimer = setInterval(function () {
  const randomNumbers = document.getElementById("random-numbers");
  if (timeLeft <= 0) {
    clearInterval(quizTimer);
    document.getElementById("countdown").innerHTML = "Ora riscrivi i numeri!";
    randomNumbers.classList.add("hide");
  } else {
    document.getElementById("countdown").innerHTML =
      "Ti rimangono " + timeLeft + " secondi.";
  }
  timeLeft -= 1;
}, 1000);
