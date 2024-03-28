import React from 'react'

function stampaNumeriMul2(quantita){
    let lista =[]
    if(quantita >= 0 && quantita < 21){
      for(let i=0; i<=quantita;i++){
        if(i%2==0){
            lista.push(i);
        }
        
      }
      return lista;
    }else{
      console.log("Errore");
    }
    
}


const Esercizio4 = (props) => {

  let {quantita} = props;
  let lista = stampaNumeriMul2(quantita)
  return (
    <div>
      <h1>Esercizio 4</h1>
      <h2>{ lista.map( (el, index) => <h2 key={index}> {el} </h2>
      ) }</h2>
    </div>
  )
}

export default Esercizio4
