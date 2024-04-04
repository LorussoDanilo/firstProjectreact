import React, { useState } from 'react'

const Calcolatrice = () => {
    let [risultato, setRisultato] = useState(0)
    let [showAlert, setShowAlert] = useState(false);
    let [alertMessage, setAlertMessage] = useState('');
    
    let [formData, setFormData] = useState({
          numeroUno: '',
          NumeroDue: '',
          operazione: ''
    });

    let calcoloRisultato = () => {
        let firstNumber = parseFloat(formData.numeroUno)
        let secondNumber = parseFloat(formData.numeroDue)

        if(formData.operazione === 'moltiplicazione') {
            setShowAlert(false)
            setRisultato(firstNumber * secondNumber)
        }else if(formData.operazione === 'divisione'){
            if(secondNumber === 0){
                setShowAlert(true)
                setAlertMessage("Non puoi dividere un numero per 0")
            }
            setRisultato(firstNumber / secondNumber)
        }else if(formData.operazione === 'somma'){
            setShowAlert(false)
            setRisultato(firstNumber + secondNumber)
        }else if(formData.operazione === 'sottrazione'){
            setShowAlert(false)
            setRisultato(firstNumber - secondNumber)

        }
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        // Calcolo dell'età
        calcoloRisultato();        
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
        <h1>Calcolatrice</h1>
        {showAlert && <div style={{ backgroundColor: 'yellow', color: 'red', padding: '10px', marginBottom: '10px' }}>{alertMessage}</div>}
        
        <form onSubmit={handleSubmit}>
                <label>
                    Numero 1:
                    <input type="text" name="numeroUno" value={formData.numeroUno} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Numero 2:
                    <input type="text" name="numeroDue" value={formData.numeroDue} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Operazione:
                    <select name="operazione" value={formData.operazione} onChange={handleChange}>
                        <option value="">Seleziona un'operazione</option>
                        <option value="somma">Somma</option>
                        <option value="sottrazione">Sottrazione</option>
                        <option value="moltiplicazione">Moltiplicazione</option>
                        <option value="divisione">Divisione</option>
                    </select>
                </label>
                <br />
                <button type="submit">Calcola</button>
            </form>

        <h2>RISULTATO : {risultato}</h2>
    </div>
  )
}

export default Calcolatrice