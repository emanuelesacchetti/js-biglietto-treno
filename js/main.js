//chiedo all'utente quanti km farà e quanti anni ha con PROMPT
//trasformo i valori dati come stringa in numeri con PARSEINT

const numeroKm = parseInt(prompt('Quanti km vuoi percorrere'));
const età = parseInt(prompt('Quanti anni hai?'));

//definisco in variabile il prezzo di un singolo km
//definisco in variabile la moltiplicazione dei km e del prezzo di 1 km

let prezzoKm = 0.21;
let prezzoTratta = (numeroKm * prezzoKm);

 console.log(prezzoTratta);

 //definisco in variabili gli sconti per minorenni e over65
 //creo una variabile con il costo del bilgietto con sconto applicato

 let scontoMinorenni = ((prezzoTratta * 20) / 100);
 let prezzoMinorenni = prezzoTratta - scontoMinorenni;

 console.log(scontoMinorenni);
 console.log(prezzoMinorenni);

 let scontoOver = ((prezzoTratta * 40) / 100);
 let prezzoOver = prezzoTratta - scontoOver;

 console.log(scontoOver);
 console.log(prezzoOver);

 //dichiaro la var costoBiglietto
 //definisco le condizioni

let costoBiglietto;

 if (età < 18) {
    costoBiglietto = prezzoMinorenni 
 } else if (età > 65) {
    costoBiglietto = prezzoOver
 } else {
    costoBiglietto = prezzoTratta
 }

//inserisco il risultato all'interno dell'html

 document.getElementById('biglietto').innerHTML = costoBiglietto;