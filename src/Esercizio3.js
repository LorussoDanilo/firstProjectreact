import React from 'react'

function stampaNumeri15(quantita){
    let lista =[]
    if(quantita >= 5 && quantita < 16){
      for(let i=5; i<=quantita;i++){
        lista.push(i);
      }
      return lista;
    }else{
      console.log("Errore");
    }
    
}


const Esercizio3 = (props) => {

  let {quantita} = props;
  let lista = stampaNumeri15(quantita)
  return (
    <div>
      <h1>Esercizio 3</h1>
      <h2>{ lista.map( (el, index) => <h2 key={index}> {el} </h2>
      ) }</h2>
    </div>
  )
}

export default Esercizio3
