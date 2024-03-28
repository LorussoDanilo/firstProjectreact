import React, { useEffect, useState } from 'react'

const Cronometro = () => {

    let [timer, setTimer] = useState(0)
    let [flagStop, setFlagStop] = useState(true)
    const [timeoutId, setTimeoutId] = useState(null); // Stato per memorizzare l'ID del timeout

    let stop = () => {
        setFlagStop(flagStop => flagStop = true)
        setTimer(valoreAttuale => valoreAttuale)
        clearTimeout(timeoutId); // Cancella il timeout attivo
        
    }

    let start = () => {
        if (timeoutId) {
            clearTimeout(timeoutId); // Cancella il timeout precedente
        }
        setFlagStop(flagStop => flagStop = false)
        let timeout = setTimeout(() => {
            setTimer(valoreAttuale => valoreAttuale + 1);
          }, 1000);

        setTimeoutId(timeout)
    }

    let reset = () => {
        setFlagStop(flagStop => flagStop = true)
        setTimer(valoreAttuale => valoreAttuale - valoreAttuale)
        clearTimeout(timeoutId); // Cancella il timeout attivo
    }

    useEffect( () => {
        if (!flagStop){
            start();
        }
         // Pulizia dell'effetto: cancella il timeout quando il componente viene smontato o il flagStop cambia
         return () => {
            clearTimeout(timeoutId);
        };
    }, [timer] );

  return (
    <div>
      <h1>CRONOMETRO</h1>
      <h2>{timer}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Cronometro
