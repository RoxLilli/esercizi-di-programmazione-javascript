/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

var tab ='';
var num = 5;
var risultato;
for (var i = 1; i <= 10; i++) {
  tab += ' ';
  risultato = num*i;
  tab += risultato;

}
  console.log(tab);
