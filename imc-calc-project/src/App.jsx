import { useState } from 'react'

import styles from './main.module.css'


function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight ] = useState('');
  const [imc, setImc] = useState(null);

  const calculaImc = () => {
    if (weight && height) {
      const heigthInMeters = height / 100;
      const calculedImc = (weight) / (heigthInMeters * heigthInMeters)
      setImc(calculedImc.toFixed(2))
    }
  }

  const categoria = (imc) => {
    if (imc < 18.5) {
      return 'Seu peso esta baixo'
    } else if (imc > 18.5 && imc < 24.9) {
      return 'Seu peso esta normal'
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
  }
}




  return (
    <div className={styles.container}>
      <header>
        <h1>
          Calculadora De IMC
        </h1>
      </header>
      <div className={styles.content}>
        <label>Peso kg:</label>
        <input className={styles.weight} type="number" onChange={(e) => setWeight(e.target.value)}/>
        <label>Altura:</label>
        <input className={styles.height} type="number" onChange={(e) => setHeight(e.target.value)} />
        <button className={styles.button} type='button' onClick={calculaImc}>Calcular IMC</button>
        <h3>Seu IMC é: {imc} </h3>
        <h3>Categoria: {categoria(imc)}</h3>
      </div>
    </div>
  )
}


export default App
