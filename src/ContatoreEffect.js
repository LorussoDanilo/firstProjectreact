import React, { useEffect, useState } from 'react'

const ContatoreEffect = () => {

    let [contatore, setcontatore] = useState(0);

    let aumenta = () => {
        setcontatore( valoreAttuale => valoreAttuale + 1);
    }

    let diminuisci = () => {
        setcontatore( valoreAttuale => valoreAttuale - 1);
    }

    useEffect( () => {
        console.log("Sono useEffect")
        if(contatore > 0){
            document.title = "Numero Positivo"
        }else if(contatore < 0){
            document.title = "Numero Negativo"
        }else{
            document.title = "Numero neutro"
        }
    }, [contatore] );

    //Se non passo parametri lo esegue ad ogni render
    //Se passo parametri, posso passare : 
    // 1 array vuoto : esegue 1 sola volta
    // 1 array nome variabile : esegue ogni volta che cambia quella variabile passata come parametro

  return (
    <div>
      <h1>ContatoreEffect</h1>
      <h1>{contatore}</h1>
      <button onClick={aumenta}>AUMENTA</button>
      <button onClick={diminuisci}>DIMINUISCI</button>
    </div>
  )
}

export default ContatoreEffect
