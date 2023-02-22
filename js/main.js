//chiedo all'utente quanti km farà e quanti anni ha con PROMPT
//trasformo i valori dati come stringa in numeri con PARSEINT

const numeroKm = parseInt(prompt('Quanti km vuoi percorrere'));
const età = parseInt(prompt('Quanti anni hai?'));

//definisco in variabile il prezzo di un singolo km
//definisco in variabile la moltiplicazione dei km e del prezzo di 1 km

let prezzoKm = 0.21;
let prezzoTratta = (numeroKm * prezzoKm);
let prezzoTratta2 = prezzoTratta.toFixed(2)

 console.log(prezzoTratta);

 //definisco in variabili gli sconti per minorenni e over65
 //creo una variabile con il costo del bilgietto con sconto applicato

 let scontoMinorenni = ((prezzoTratta * 20) / 100);
 let prezzoMinorenni = prezzoTratta - scontoMinorenni;
 let prezzoMinorenni2 = prezzoMinorenni.toFixed(2);

 console.log(scontoMinorenni);
 console.log(prezzoMinorenni);

 let scontoOver = ((prezzoTratta * 40) / 100);
 let prezzoOver = prezzoTratta - scontoOver;
 let prezzoOver2 = prezzoOver.toFixed(2);


 console.log(scontoOver);
 console.log(prezzoOver);
 

 //dichiaro la var costoBiglietto
 //definisco le condizioni

let costoBiglietto;

 if (età < 18) {
    costoBiglietto = prezzoMinorenni2 
 } else if (età > 65) {
    costoBiglietto = prezzoOver2
 } else {
    costoBiglietto = prezzoTratta2
 }


const fraseMinorenni = 'Le è stato applicato uno sconto del 20% in quanto ha meno di 18 anni';
const fraseOver = 'Le è stato applicato uno sconto del 40% in quanto ha più di 65 anni';


 if (età < 18) {
    document.getElementById('why').innerHTML = fraseMinorenni;
 } else if (età > 65) {
    document.getElementById('why').innerHTML = fraseOver;
 } else {
    document.getElementById('why').innerHTML = 'BUON VIAGGIO';
 }

//inserisco il risultato all'interno dell'html

 document.getElementById('biglietto').innerHTML = costoBiglietto;

 document.getElementById('eta-utente').innerHTML = età;
 document.getElementById('km-utente').innerHTML = numeroKm;