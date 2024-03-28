import React, { useState } from 'react'

const Contatore = () => {
    //Questa funzione torna un array di due elementi, dove il primo elemento è il valore, ovvero 0. Il secondo elemento è la funzione set
    let [conta, setconta] = useState(0);

    let aumenta = () => {
        setconta(conta + 1);
    }

    //Usare sempre questa modalità poichè ha memoria durante i secondi del primo click.Il setTimeout è stato utilizzato per evidenziare le differenze
    let aumentaMemoria = () => {
        setTimeout(() => {
            setconta(valoreAttuale => {return ++valoreAttuale})
        },5000)
    }
    // La funzione scritta in questo modo non ha memoria
    let diminuisci = () => {
        setTimeout(() => {
            setconta(conta - 1);
        },5000)
        
    }


  return (
    <div>
        <h1>Contatore</h1>
        <h2>{conta}</h2>
        <button onClick={aumenta}>AUMENTA</button>
        <button onClick={diminuisci}>DIMINUISCI CON DELAY</button>
        <button onClick={aumentaMemoria}>AUMENTA CON DELAY</button>

    </div>
    
  )
}

export default Contatore