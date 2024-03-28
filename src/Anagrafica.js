import React, { useState } from 'react'

let anag = [
    {id : 1 , nome : 'Mario'},
    {id : 2 , nome : 'Anna'},
    {id : 3 , nome : 'Luca'},
    {id : 4 , nome : 'Carlo'},
    {id : 5 , nome : 'Claudia'},
]


const Anagrafica = () => {

    

    let [utenti, setutenti] = useState(anag)


    let elimina = (idutente) => {
        //creo un nuovo array invece di eliminare un elemento dall'array originale
        //filter è una sorta di forEach. Quando coincidono javascript scarta la coincidenza creando il nuovo array con gli elementi aggiornati
        //filter cicla un array, come il foreach oppure map, ma la differenza è che torna il singolo elemento se rispetta la condizione
        anag = anag.filter( el => el.id !== idutente)
        setutenti(anag);
    }   


  return (
    <div>
        <h1>Anagrafica</h1>
        {utenti.map( (el) => <h2 key = {el.id}>
            {el.nome} <button onClick={ () => {elimina(el.id)}}>ELIMINA</button></h2> )}
    </div>
  )
}

export default Anagrafica