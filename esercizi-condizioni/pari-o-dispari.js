/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.

  Esempi:
    Input: numero = 63
    Output: 1

    Input: numero = 24
    Output: 0

  Consigli:
  Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :)
  (Se non ti ricordi riguarda la lezione "Come dichiarare e definire le variabili e i tipi di dato" oppure "Il tipo Numero e gli operatori aritmetici")

  http://www.imparareaprogrammare.it
*/

// var n = 63;
var n = prompt();
var resto = n%2;
// console.log(resto);

//console.log(!isNaN(n));


if (!isNaN(n)) {
  if (resto == 1){
    console.log(`il numero ${n} è dispari` );
  }else{
    console.log(`il numero ${n} è pari`);
  }
}else{
  console.log('devi inserire un numero');
}
