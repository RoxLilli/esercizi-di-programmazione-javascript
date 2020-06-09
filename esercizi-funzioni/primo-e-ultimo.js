/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

function maggiore(a,b,c){

  if ((a>b) && (a>c)){
    console.log('a è il numero maggiore ');
  }
  if ((b>a) && (b>c)){
    console.log('b è il numero maggiore ');
  }
  if ((c>a) && (c>b)){
    console.log('c è il numero maggiore ');
  }

}

maggiore(800,130,5000);


function minore(a,b,c){

  if ((a<b) && (a<c)){
    console.log('a è il numero minore ');
  }
  if ((b<a) && (b<c)){
    console.log('b è il numero minore ');
  }
  if ((c<a) && (c<b)){
    console.log('c è il numero minore ');
  }

}

minore(8,130,50);





function maggiore2(vett){
  var magg = vett[0];
  console.log(magg);
  for(var i=1; i<vett.length; i++){
    console.log(vett[i]);
    if(magg < vett[i]) magg = vett[i];
  }

  return magg;
}

var vettore = [8,9,64,87,457,896,1,7];
console.log('il maggiore è '+ maggiore2(vettore));
