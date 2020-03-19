// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.
// --------------------------------------------------------

// Creare var utente e chiedere quanti km vuole fare
var utenteKm = parseInt(prompt("Quanti km vuoi percorrere?"));

// chiedere all'utente quanti anni ha
var utenteAnni = parseInt(prompt("Quanti anni hai?"));

// var per prezzo biglietto al km
var prezzoPerKm = 0.21;

// var biglietto senza sconto
var prezzoNoSconto = prezzoPerKm * utenteKm;

// var biglietto sconto 20%
var prezzoUnder = prezzoNoSconto * 0.2;

// var biglietto sconto 40%
var prezzoOver = prezzoNoSconto * 0.4;

// var del prezzo finale del biglietto
var prezzoFinale;

// condizioni costo del biglietto
if (utenteAnni < 18){
  prezzoFinale = prezzoUnder;
} else if (utenteAnni > 65){
  prezzoFinale = prezzoOver;
} else{
  prezzoFinale = prezzoNoSconto;
}

console.log("Il prezzo finale prima del calcolo:" + prezzoFinale);
// output prezzo biglietto

document.getElementById('yo').innerHTML = "Il prezzo del tuo biglietto è: " + prezzoFinale.toFixed(2) + " euro";
