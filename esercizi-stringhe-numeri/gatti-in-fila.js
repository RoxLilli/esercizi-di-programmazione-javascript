/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

var gatti = 60;
var gatti_per_fila = 3;

//con operatore modulo %
var numero_di_file_m = Math.round(gatti/gatti_per_fila);
var gatti_mancanti_m = Math.round(gatti%gatti_per_fila);

//con operazione aritmetica
//Math.floor() restituisce il numero intero, arrotondato per difetto
var numero_di_file_o = Math.round(gatti/gatti_per_fila);
var gatti_mancanti_o = gatti-(gatti_per_fila*(Math.floor(gatti/gatti_per_fila)));


console.log('Modulo: Numero di file ' + numero_di_file_m + ' e gatti mancanti ' + gatti_mancanti_m);
console.log('Operazione aritmetica: Numero di file ' + numero_di_file_o + ' e gatti mancanti ' + gatti_mancanti_o);
