import React from 'react'




function stampaTabellina(numero){
    let lista =[]
    let numeroFisso = numero
    if(numero > 0 && numero < 11){
      for(let i=1; i<=10;i++){
        lista.push(numero);
        numero+=numeroFisso
      }
      return lista;
    }else{
      console.log("Errore");
    }
    
}



const Esercizio1 = (props) => {

  let {numero} = props;
  let lista = stampaTabellina(numero)
  return (
    <div>
      <h1>Esercizio 1</h1>
      <h2>{ lista.map( (el, index) => <h2 key={index}> {el} </h2>
      ) }</h2>
    </div>
  )
}

export default Esercizio1
