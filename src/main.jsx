import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Provider, connect } from 'react-redux';
// import store from './store';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <Provider >
      <PrimeReactProvider>
        <App/>  

      </PrimeReactProvider>

    // </Provider>

  // </React.StrictMode>
)
