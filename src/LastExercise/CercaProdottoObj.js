import React, { useState } from 'react';

let CercaProdottoObj = () => {
  let [showAlert, setShowAlert] = useState(false);
  let [alertMessage, setAlertMessage] = useState('');
  let [prodotti, setProdotti] = useState([
    {
      id: 1,
      nomeProdotto: 'Caffè',
      descrizione: 'Lavazza 20 cialde',
      prezzo: 10.99,
    },
    {
      id: 2,
      nomeProdotto: 'Acqua',
      descrizione: 'San benedetto',
      prezzo: 2.99,
    },
    {
      id: 3,
      nomeProdotto: 'Borraccia',
      descrizione: 'In PLC',
      prezzo: 12.99,
    },
    {
      id: 4,
      nomeProdotto: 'Zaino',
      descrizione: 'Capienza: 30L',
      prezzo: 32.99,
    },
    {
      id: 5,
      nomeProdotto: 'Borsello',
      descrizione: 'Per matite',
      prezzo: 6.99,
    },
  ]);

  let [formData, setFormData] = useState({
    nomeProdotto: '',
  });

  let cercaProdotto = (nomeProdotto) => {
    let risultato = prodotti.filter((el) => el.nomeProdotto === nomeProdotto);
    
    if(risultato.length === 0){
      setShowAlert(true)
      setAlertMessage('Nessun prodotto trovato')
    }else{
      setProdotti(risultato); 
      setShowAlert(false)
    }
    

  };

  let ripristina = () => {
    let arrayOriginale = [
      {
        id: 1,
        nomeProdotto: 'Caffè',
        descrizione: 'Lavazza 20 cialde',
        prezzo: 10.99,
      },
      {
        id: 2,
        nomeProdotto: 'Acqua',
        descrizione: 'San benedetto',
        prezzo: 2.99,
      },
      {
        id: 3,
        nomeProdotto: 'Borraccia',
        descrizione: 'In PLC',
        prezzo: 12.99,
      },
      {
        id: 4,
        nomeProdotto: 'Zaino',
        descrizione: 'Capienza: 30L',
        prezzo: 32.99,
      },
      {
        id: 5,
        nomeProdotto: 'Borsello',
        descrizione: 'Per matite',
        prezzo: 6.99,
      }
    ];
    setProdotti(arrayOriginale)
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    cercaProdotto(formData.nomeProdotto);
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {showAlert && <div style={{ backgroundColor: 'yellow', color: 'red', padding: '10px', marginBottom: '10px' }}>{alertMessage}</div>}
      
      <h1>Cerca Prodotto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Inserisci nome prodotto :
          <input type="text" name="nomeProdotto" value={formData.nomeProdotto} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Cerca</button>
        <button type="button" onClick={ripristina}>Ripristina</button>
      </form>


      <h1>Risultati</h1>
      {prodotti.map((el) => (
        <div key={el.id}>
          <h3>
            Nome Prodotto: {el.nomeProdotto},<br /> Descrizione: {el.descrizione},<br /> Prezzo: {el.prezzo}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CercaProdottoObj;
