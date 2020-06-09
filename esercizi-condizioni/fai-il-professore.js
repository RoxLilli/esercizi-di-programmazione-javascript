/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/


var v = 23;
var typevote;

// if (v < 18) {
//   typevote = "insufficiente";
// }else if ((18 <= v) && (v < 21)) {
//   typevote = "sufficiente";
// } else if ((21 <= v) && (v < 24)) {
//   typevote = "buono";
// }else if ((24 <= v) && (v < 27)) {
//   typevote = "distinto";
// }else if ((27 <= v) && (v <= 29)) {
//   typevote = "ottimo";
// }else if (v == 30) {
//   typevote = "eccellente";
// }else{
//   console.log('voto non valido');
// }


switch (true) {

  case v<18:
    typevote = "insufficiente";
    break;

  case 18<=v && v<21:
   typevote = "sufficiente";
    break;

    case 21<=v && v<24:
     typevote = "buono";
      break;


      case 24<=v && v<27:
       typevote = "distinto";
        break;

        case 27<=v && v<=29:
         typevote = "ottimo";
          break;

          case 30:
           typevote = "eccellente";
            break;

  default:
    typevote = 'voto non valido';
}



console.log(typevote);
