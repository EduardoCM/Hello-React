import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PrimerComponente from './Ejercicios/PrimerComponente'
import SegundoComponente from './Ejercicios/SegundoComponente'
import StateUno from './Ejercicios/StateUno'

import FormularioLogin from './Ejercicios/FormularioLogin'
import FormularioColecciones from './Ejercicios/FormularioColecciones'

import PropsUno from './Ejercicios/PropsUno'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FormularioColecciones />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
