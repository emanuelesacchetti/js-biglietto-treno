//chiedo all'utente quanti km farà e quanti anni ha con PROMPT
//trasformo i valori dati come stringa in numeri con PARSEINT

const numeroKm = parseInt(prompt('Quanti km vuoi percorrere'));
const eta = parseInt(prompt('Quanti anni hai?'));

//definisco in variabile il prezzo di un singolo km
//definisco in variabile la moltiplicazione dei km e del prezzo di 1 km

let prezzoKm = 0.21;
let prezzoTratta = (numeroKm * prezzoKm);


 console.log(prezzoTratta);

 //definisco in variabili gli sconti per minorenni e over65
 //creo una variabile con il costo del bilgietto con sconto applicato
 //uso una funzione per avere due decimali

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
 //aggiungo le frasi da stampare in html in caso delle stesse condizioni

let costoBiglietto;
const fraseMinorenni = 'Le è stato applicato uno sconto del 20% in quanto ha meno di 18 anni';
const fraseOver = 'Le è stato applicato uno sconto del 40% in quanto ha più di 65 anni';

 if (eta < 18) {
    costoBiglietto = prezzoMinorenni;
    document.getElementById('why').innerHTML = fraseMinorenni; 
 } else if (eta > 65) {
    costoBiglietto = prezzoOver;
    document.getElementById('why').innerHTML = fraseOver;
 } else {
    costoBiglietto = prezzoTratta;
 }

//inserisco il risultato all'interno dell'html

 document.getElementById('biglietto').innerHTML = costoBiglietto.toFixed(2);
 document.getElementById('eta-utente').innerHTML = eta;
 document.getElementById('km-utente').innerHTML = numeroKm;