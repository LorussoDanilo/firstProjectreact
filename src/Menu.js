import React from 'react';
//Componente menu è una funzione
// parametri : props ... vengono passati come oggetti
const Menu = (props) => {
    //PRIMA DEL RETURN è codice JAVASCRIPT
  //Codice destrutturato cosi da evitare di scrivere props.oggetto tante volte
  // Stato per il numero
  const link2 = "Azienda";
  const link3 = "Contatti";

    //Sbagliato, l'await non si può fare
    /*fetch('https://jsonplaceholder.typicode.com/users').then(async (x) => {
        await x.json().then((ris) => {
            utenti = ris;
            console.log(utenti);
        });
    });*/
             

    //DataBinding : mappaggio tra html e js attraverso le {}
    

  //QUESTO è JSX  
  //Nei div si possono utilizzare delle classi di tipo javascript e html. 
  // per riferirsi a classi HTML SI scrive className=, mentre per js class= 
  //l'html, qui, in react, obbliga a chiudere tutti i tag
  
/*
  {utenti.array.forEach(element => {
    return (<h1>{ element.name }</h1>)
  })}*/
  return (
    
    <div>
      <h1 className="arancione">Menu</h1>
      <h2>{link2} - {link3}</h2>

    </div>
  )
}

export default Menu
