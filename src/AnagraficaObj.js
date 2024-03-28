import React, { useState } from 'react'




const AnagraficaObj = () => {


    
const [persona, setPersona] = useState(
    {
        nome: 'Danilo',
        cognome : 'Lorusso',
        eta : 30,
    });

const compleanno = () => {
    let anni = persona.eta + 1;
    setPersona({
        ...persona,
        eta : anni
    });
}



  return (
    <div>
        <h1>AnagraficaObj</h1>
        <h2>Nome : {persona.nome}</h2>
        <h2>Cognome : {persona.cognome}</h2>
        <h2>Età : {persona.eta}</h2>
        <button onClick={() =>  {compleanno()}}>COMPLEANNO</button>
    
    </div>
  )
}

export default AnagraficaObj