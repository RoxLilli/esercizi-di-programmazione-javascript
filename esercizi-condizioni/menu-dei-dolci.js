/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


var scelta = 3;
var dolce;

// if (scelta == 1) {
//   dolce = "Tiramisù";
// }else if (scelta == 2){
//   dolce = "Torta della nonna";
// }else if (scelta == 3) {
//   dolce = "Cheesecake alla nutella";
// }else if (scelta == 4) {
//   dolce = "Macedonia";
// }else{
//   dolce = "Dolce non disponibile";
// }

switch (scelta) {
  case 1:
    dolce = "Tiramisù";
    break;
    case 2:
      dolce = "Torta della nonna";
      break;
      case 3:
        dolce = "Cheesecake alla nutella";
        break;
        case 4:
          dolce = "Macedonia";
          break;

  default:
    dolce = "Dolce non disponibile";
}




console.log(dolce);
