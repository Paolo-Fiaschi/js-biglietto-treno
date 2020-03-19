// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.
// ------------------------------------


// var età persona1
var eta1 = parseInt(prompt("Quanti anni ha il primo utente?"));

// var età persona2
var eta2 = parseInt(prompt("Quanti anni ha il secondo utente?"));

// var per l'età maggiore
var etaMaggiore;

// qual è il numero maggiore?
if (eta1 >= eta2) {
etaMaggiore = eta1;
} else if(eta2 > eta1){
  etaMaggiore = eta2;
}


// output età maggiore
document.getElementById('yo').innerHTML = "L'utente più grande ha: " + etaMaggiore + " anni";
