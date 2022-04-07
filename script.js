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

setTimeout(function () {
  let userNums = [];

  for (let i = 0; i < 5; i++) {
    userNums.push(
      parseInt(
        prompt(
          "Riscrivi i numeri appena visualizzati uno alla volta! Sei al numero: " +
            (i + 1)
        )
      )
    );
  }

  console.log("Full array: " + userNums.join(", "));

  let firstArray = userNums;
  let secondArray = numbers;
  let jsonArray = [];

  firstArray.forEach((val) => {
    if (secondArray.includes(val)) {
      jsonArray.push({ name: val, matched: true });
    } else {
      jsonArray.push({ name: val, matched: false });
    }
    console.log(firstArray);
    console.log(secondArray);
  });

  console.log(jsonArray);
  document.getElementById("result").innerHTML = val[i];

  const result = jsonArray.filter(checkMatch);

  function checkMatch(val) {
    return val.matched === true;
  }

  console.log(result);
}, 7000);
