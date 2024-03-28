import React from 'react'

const Utenti = () => {
//Codice Javascript

    let utenti = [{
        nome: 'Mario',
        cognome: 'Rossi'
    },{
        nome:'Anna',
        cognome : 'Verdi'
    }];

    let foreach1 = utenti.forEach((x) => {
        console.log("For each" + x.nome)
        return x;
    });

    let map1 = utenti.map((x) => {
        console.log("Map: " + x.nome)
        return x;
    });

    console.log(foreach1);
    console.log(map1);
  
  //il map ritorna direttamente un array, mentre il foreach non torna nulla
    // 2 jsx
    return (
    <div>
        <h1>Utenti</h1>
      { utenti.map( (el, index) => <h2 key={index}> {el.nome} {el.cognome} </h2>
      ) }
    </div>
  )
}

export default Utenti

/*
() => {} standard
    => {} posso eliminare le parentesi tonde SOLO SE IL PARAMETRO E' UNO SOLO
    => posso eliminare le graffe SOLO SE l'istruzione è una sola ed il RETURN è implicito
*/
