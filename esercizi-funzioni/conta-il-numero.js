/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre


  http://www.imparareaprogrammare.it
*/


function contanumero(n){
  console.log(typeof(n));
console.log(isNaN(n));
    if (isNaN(n) === false)  {
        if (n <= 9999){
          console.log((n.toString()).length);
        }else{
          console.log('il numero non deve superare 9999 ');
        }
    }else{
    console.log('devi inserire un numero');
  }
}

contanumero(234);
