import React, { useEffect, useState } from 'react'

const Cronometro = () => {

    let [timer, setTimer] = useState(0)
    let [flagStop, setFlagStop] = useState(true)

    let stop = () => {
        setFlagStop(flagStop => flagStop = true)
        setTimer(valoreAttuale => valoreAttuale)
        
    }

    let start = () => {
        setFlagStop(flagStop => flagStop = false)
        setTimeout(() => {
            setTimer(valoreAttuale => valoreAttuale + 1);
          }, 1000);

        
            
    }

    let reset = () => {
        setFlagStop(flagStop => flagStop = true)
        setTimer(valoreAttuale => valoreAttuale - valoreAttuale)
    }

    useEffect( () => {
        if (!flagStop){
            start()
        }
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
