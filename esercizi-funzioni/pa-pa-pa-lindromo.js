/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/


function palindromo(n) {
  var ar = (n.toString().split('')).join(',');
  var arrev = (n.toString().split('')).reverse().join(',');

  ar = ar.replace(/\W/g, "");
  arrev = arrev.replace(/\W/g, "");

  console.log(ar, '-', arrev);

  if (ar === arrev) {
    console.log('TRUE');
  }else{
    console.log('FALSE');
  }

}

palindromo('i topi non avevano nipoti');
