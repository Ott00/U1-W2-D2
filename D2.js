/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 5;
let y = 10;

if (x > y) {
  console.log("Il numero più grande è", x);
} else if (x === y) {
  console.log("I numeri sono uguali");
} else {
  console.log("Il numero più grande è", y);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = 10;

const isNumberEqualToFive = number !== 5 ? "Not equal" : "Equal";

console.log(isNumberEqualToFive);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Uso la stessa const number dichiarata sopra
const module = number % 5;
const isNumberDivisibleByFive =
  module === 0 ? "Divisibile per 5" : "Non divisibile per 5";

console.log(isNumberDivisibleByFive);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 4;
let n2 = 10;

if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8 || n2 - n1 === 8) {
  console.log(
    "Uno dei numeri forniti o l'addizione/sottrazione degli stessi da come risultato 8"
  );
} else {
  console.log(
    "Nessuno dei numeri forniti o l'addizione/sottrazione degli stessi da come risultato 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 60;

let shippingCosts = totalShoppingCart > 50 ? 0 : 10;

console.log(
  "Il totale del carrello è di:",
  totalShoppingCart + shippingCosts + "€"
);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const blackFridayDiscount = 0.2;
const discountedTotalShoppingCart =
  totalShoppingCart - totalShoppingCart * blackFridayDiscount;
shippingCosts = discountedTotalShoppingCart > 50 ? 0 : 10;

console.log(
  "Il totale del carrello è di:",
  discountedTotalShoppingCart + shippingCosts + "€"
);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 9;
const b = 12;
const c = 1;

let biggerNumber;
let middleNumber;
let smallerNumber;

if (a > b && a > c) {
  biggerNumber = a;
  if (b > c) {
    middleNumber = b;
    smallerNumber = c;
  } else {
    middleNumber = c;
    smallerNumber = b;
  }
} else if (b > a && b > c) {
  biggerNumber = b;
  if (a > c) {
    middleNumber = a;
    smallerNumber = c;
  } else {
    middleNumber = c;
    smallerNumber = a;
  }
} else if (c > a && c > b) {
  biggerNumber = c;
  if (b > a) {
    middleNumber = b;
    smallerNumber = a;
  } else {
    middleNumber = a;
    smallerNumber = b;
  }
}
console.log(biggerNumber, middleNumber, smallerNumber);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const value = "5";

console.log(
  "Il valore della variabile è un numero?",
  typeof value === "number"
);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const oddEven = 3;
const result = oddEven % 2 === 0 ? "pari" : "dispari";
console.log("Il valore della variabile è", result);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Meno di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arr = [];
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);

/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr.pop();
arr.push(100);
console.log(arr);
