/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

// var actualYear = 2020;
var d = new Date();
var actualYear = d.getFullYear();

var birthDay = 1976;

var age = actualYear - birthDay;
var oneHundred = 100 - age;


console.log('età = '+ age + ', anni mancanti ai 100 = ' + oneHundred);
