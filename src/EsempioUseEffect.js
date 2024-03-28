import React, { useEffect } from 'react'

export const 
EsempioUseEffect = () => {

    //Viene chiamato automaticamente alla fine, ovvero dopo il render HTML da React. Quindi, dopo il return dell'HTML. Viene chiamato ogni volta che viene chiamato il componente. Quindi, useEffect viene chiamto ad ogni render
    useEffect(() => {
        console.log("sono use effect");
        document.title = "Sono un componente"
    });

    console.log("codice generico")
  return (
    <div>
        <h1>EsempioUseEffect</h1>
    
    </div>
  )
}
