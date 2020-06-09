/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0


  http://www.imparareaprogrammare.it
*/


function timer(n){

  for (let i=n-1; i>=0; i--){
    console.log(i);
  }

  for (let j=0; j<n+j; j++){
n-=1
    console.log('n prima = '+n, 'j = '+j, 'n dopo = '+n, 'n+j = '+(n+j));
  }


}

timer(5);
