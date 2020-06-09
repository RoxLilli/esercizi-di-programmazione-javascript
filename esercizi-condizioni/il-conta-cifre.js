/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/


var num = 547;
var string = (num.toString());//converto in stringa
var string_length = string.length;//contro la lunghezza della stringa

if (num <= 9999){
  console.log(string_length);
}else{
  console.log('il numero deve essere inferiore a 9999');
}
