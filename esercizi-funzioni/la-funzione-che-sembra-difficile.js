/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4


  http://www.imparareaprogrammare.it
*/

function difficile(n, k) {
  var conta = (n.toString().split(''));
  conta = conta.reverse();

  var lunghezza = conta.length;

  if (k > lunghezza) {
    console.log(0);
  }else{
    console.log(conta[k-1]);
  }

}

difficile(123456, 1);
