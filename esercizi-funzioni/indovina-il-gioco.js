/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/


function int(n){

  if ((!isNaN(n)) && (n<=7)){
    risultato = true;
  }else{
    risultato = false;
  }
return(risultato);
}

ins_numero = prompt('inserisci un numero');

if (int(ins_numero) === true){
  // console.log('ok');

    // if (ins_numero === 1){
    //   console.log('Lunedì');
    // }else if (ins_numero === 2) {
    //   console.log('Martedì');
    // }else if (ins_numero === 3) {
    //   console.log('Mercoledì');
    // }else if (ins_numero === 4) {
    //   console.log('Giovedì');
    // }else if (ins_numero === 5) {
    //   console.log('Venerdì');
    // }else if (ins_numero === 6) {
    //   console.log('Sabato');
    // }else if (ins_numero === 7) {
    //   console.log('Domenica');
    // }else{
    //   console.log('Peccato, non posso indovinare il giorno.');
    // }

    switch (parseInt(ins_numero) ){
      case 1:
        console.log('Lunedì');
        break;

        case 2:
          console.log('Martedì');
          break;

          case 3:
            console.log('Mercoledì');
            break;

            case 4:
              console.log('Giovedì');
              break;

              case 5:
                console.log('Venerdì');
                break;

                case 6:
                  console.log('Sabato');
                  break;

                  case 7:
                    console.log('Domenica');
                    break;

      default:
        console.log('Peccato, non posso indovinare il giorno.');
        // console.log(ins_numero);
    }


}else{
  console.log('devi inserire un numero compreso fra 1 e 7');
}
