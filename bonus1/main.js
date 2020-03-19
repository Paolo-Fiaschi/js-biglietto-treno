// Quanti minuti mancano alla fine dell’ora?
// -------------------------------------------


// creare una var per i minuti passati
var d = new Date();

// output minuti mancanti
document.getElementById("yo").innerHTML = "Alla fine dell'ora mancano " + parseInt(60 - d.getMinutes()) + " minuti";
