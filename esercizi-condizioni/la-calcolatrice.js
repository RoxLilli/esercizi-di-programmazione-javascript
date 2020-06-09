/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/


var a = 55;
var b = 6;

// var operazione = "media";
var operazione = prompt("Scegli l'operazione fra: addizione, sottrazione, moltiplicazione, divisione, modulo, potenza ");
var risultato;

switch (operazione) {
  case "addizione":
    risultato = a+b;
  break;
    case "sottrazione":
    risultato = a-b;
  break;
    case "moltiplicazione":
    risultato = a*b;
  break;
    case "divisione":
    risultato = a/b;
  break;
    case "modulo":
    risultato = a%b;
  break;
    case "potenza":
    // risultato = Math.pow(a, b);
    risultato = a**b;
  break;
    case "media":
    risultato = (a+b)/2;
  break;
  default:
    risultato = 'operazine non valida'
}


console.log(risultato);
