import React from 'react'

function stampaNumeri(quantita){
    let lista =[]
    if(quantita >= 0 && quantita < 11){
      for(let i=0; i<=quantita;i++){
        lista.push(i);
      }
      return lista;
    }else{
      console.log("Errore");
    }
    
}


const Esercizio2 = (props) => {

  let {quantita} = props;
  let lista = stampaNumeri(quantita)
  return (
    <div>
      <h1>Esercizio 2</h1>
      <h2>{ lista.map( (el, index) => <h2 key={index}> {el} </h2>
      ) }</h2>
    </div>
  )
}

export default Esercizio2
