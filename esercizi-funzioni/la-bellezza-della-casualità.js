/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


function random(e){
  var numrandom = (Math.random() * e);
  console.log(Math.floor(numrandom));//Math.floor() numero intero
}

random(15);
