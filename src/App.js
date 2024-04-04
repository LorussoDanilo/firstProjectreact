import './App.css';
import Menu from './Menu';
import Contatore from './Contatore';
import Utenti from './Utenti';
import Anagrafica from './Anagrafica';
import AnagraficaObj from './AnagraficaObj';
import Esercizio1 from './Esercizio1';

import Esercizio2 from './Esercizio2';
import CercaProdottoObj from './LastExercise/CercaProdottoObj';

import Esercizio3 from './Esercizio3';
import Esercizio4 from './Esercizio4';
import Esercizio5 from './Esercizio5';
import { EsempioUseEffect } from './EsempioUseEffect';
import ContatoreEffect from './ContatoreEffect';
import Cronometro from './Cronometro';
import FormEta from './LastExercise/FormEta';
import Calcolatrice from './LastExercise/Calcolatrice';


// COMPONENTE: file js che contiene una funzione javascript
function App() {


  let tabellina5 = {
    numero : 5
  }

  let tabellina4 = {
    numero : 4
  }

  let parametroQuantitaNum = {
    quantita : 10
  }

  let parametroQuantitaNum15 = {
    quantita : 15
  }

  let parametroMul2 = {
    quantita : 20
  }

  let parametroMul2Doppio = {
    quantita : 20
  }

  // il DOM non c'è più

  // 1 Area: Javascript

  //2 Area: JSX(JavaScriptExtension) Javascript+html

  //QUI C'è IL JSX
  //... indica lo spread che semplifica il codice passando direttamente l'oggetto. In questo caso l'oggeto è parametrimenu
  return (
    <div className="App">
      
      <Menu/>
      <h1>Questa è la mia applicazione</h1>

      <ContatoreEffect/>
      <Cronometro/>
      <Contatore/>
      <Utenti/>
      <Anagrafica/>
      <AnagraficaObj/>
      <EsempioUseEffect/>
      <CercaProdottoObj/>
      <FormEta/>
      <Calcolatrice/>
      
      
      
      <Esercizio1 {...tabellina4}/>
      <Esercizio1 {...tabellina5}/>

      <Esercizio2 {...parametroQuantitaNum}/>

      <Esercizio3 {...parametroQuantitaNum15}/>
      <Esercizio4 {...parametroMul2}/>
      <Esercizio5 {...parametroMul2Doppio}/>
      
    </div>
  );
}

export default App;
