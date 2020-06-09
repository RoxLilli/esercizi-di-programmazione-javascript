/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var a = 10;
var b = -2;
var c = 31;
var d = 22;
var e = 15;
var f = -6;
var g = 7;


var caldo = a;
var freddo = a;

if (b>caldo) caldo = b;
if (b<freddo) freddo = b;

if (c>caldo) caldo = c;
if (c<freddo) freddo = c;

if (d>caldo) caldo = d;
if (d<freddo) freddo = d;

if (e>caldo) caldo = e;
if (e<freddo) freddo = e;

if (f>caldo) caldo = f;
if (f<freddo) freddo = f;

if (g>caldo) caldo = g;
if (g<freddo) freddo = g;

console.log('giornata più calda ' + caldo + ' e giornata più fredda ' + freddo);
