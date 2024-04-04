import React from 'react'
import { useState } from 'react'


const FormEta = () => {

    let [eta, setEta] = useState(0)
    let [showAlert, setShowAlert] = useState(false);
    let [alertMessage, setAlertMessage] = useState('');
    
    let [formData, setFormData] = useState({
          nome: '',
          cognome: '',
          annoNascita: ''
    });

    let calcoloEta = () => {
        // Ottieni l'oggetto Date corrente
        const currentDate = new Date();

        // Ottieni l'anno corrente
        const currentYear = currentDate.getFullYear();
        const age = currentYear - formData.annoNascita;

        if (age < 0) {
          setShowAlert(true);
          setAlertMessage('L\'anno di nascita non può essere nel futuro!');
        }else if(age > 125){
            setShowAlert(true);
          setAlertMessage('Non puoi avere più di 124 anni!');
        } else {
          setEta(age);
          setShowAlert(false);
          setAlertMessage('');
        }
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        // Calcolo dell'età
        calcoloEta();        
    };

    let handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

  return (
    <div>
        <h1>Form Età</h1>
        {showAlert && <div style={{ backgroundColor: 'yellow', color: 'red', padding: '10px', marginBottom: '10px' }}>{alertMessage}</div>}
        
        <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" name="nome" value={formData.nome} onChange={handleChange}  />
            </label>
            <br />
            <label>
              Cognome:
              <input type="text" name="cognome" value={formData.cognome} onChange={handleChange}/>
            </label>
            <br />
            <label>
              Anno di Nascita:
              <textarea type="text" name="annoNascita" value={formData.annoNascita} onChange={handleChange}/>
            </label>
            <br />
              <button type="submit">Calcola età</button>
        </form>


        <h2>{eta}</h2>
    </div>
  )
}


export default FormEta