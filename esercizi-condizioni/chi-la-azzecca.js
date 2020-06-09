/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var player1 = 51;
var player2 = 5;

var numrandom = Math.random() * (100-1) +1;
numrandom = Math.floor(numrandom);

console.log('giocatore 1 = '+player1);
console.log('giocatore 2 = '+player2);
console.log('Numero casuale generato = ' + numrandom);

if (numrandom == player1){
  console.log('Il giocatore1 ha azzeccato il numero');
}else if (numrandom == player2) {
  console.log('Il giocatore2 ha azzeccato il numero');
}else{

    var scarto1 = numrandom - player1;
    var scarto2 = numrandom - player2;

    console.log(scarto1);
    console.log(scarto2);

      if (scarto1 == 1) {
        console.log('Nessuno dei due ha azzeccato il numero casuale ma il giocatore1 si è avvicinato di più');
      } else if (scarto2 == 1){
        console.log('Nessuno dei due ha azzeccato il numero casuale ma il giocatore2 si è avvicinato di più');
      } else if (scarto1 == -1){
        console.log('Nessuno dei due ha azzeccato il numero casuale ma il giocatore1 si è avvicinato di più');
      } else if (scarto2 == -1){
        console.log('Nessuno dei due ha azzeccato il numero casuale ma il giocatore2 si è avvicinato di più');
      }else{
        console.log('Nessuno dei due ha azzeccato il numero casuale');
      }




}
