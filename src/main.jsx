import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Pages/Home'

import '../src/Styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculator />
    <p id="footer">Feito com amor pelo Fridson Firmino! e atualizado por amor de João Paulo</p>
  </React.StrictMode>,
)
