// Benvenuto
alert("Benvenuto sul sito di Trenitalia!");

// Info 
alert("Nei prossimi passaggi ti saranno richiesti i dati necessari per il calcolo del prezzo del tuo biglietto")

// Chiedo il numero di km che vuole fare 
const numerokm = prompt("Quanti km percorrerai?");
console.log("Il passeggerò percorrerà: ", numerokm);

// Chiedo l'età al passeggero 
const etàpasseggero = prompt("Quanti anni hai?");
console.log("Il passeggerò ha: ", etàpasseggero);

// Calcolo prezzo standard
var molt = numerokm * 0.21;
document.getElementById("ticket-price").innerHTML = molt;
