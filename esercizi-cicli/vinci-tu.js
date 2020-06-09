/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var n_lanci = 1;

var tab1 = 0;
var tab2 = 0;
for (var i = 0; i < n_lanci; i++) {

  var interval_min = Math.random() * (6) +1;
  interval_min = Math.floor(interval_min);

  var interval_max = Math.random() * (6) +1;
  interval_max = Math.floor(interval_max);

  // var risultato1 = interval_min + interval_min;

  tab1 += interval_min;
  tab2 += interval_max;
  console.log(interval_min, interval_max);
}

if (tab1 > tab2) {
  console.log('il giocatore 1 ha vinto con ' + n_lanci + ' lanci');
}else{
  console.log('il giocatore 2 ha vinto con ' + n_lanci + ' lanci');
}

console.log(tab1, tab2);


var body = document.querySelector('body');



    console.log(body);
    window.onload = () => {
    // console.log(body.style.background = "rgb(210, 224, 205)");
  }



var isBlue = false;
setInterval(function(){
if (isBlue){
  body.style.background = "rgb(210, 224, 205)";
}else{
  body.style.background = "rgb(250, 274, 235)";
}
isBlue = !isBlue;
}, 500);
