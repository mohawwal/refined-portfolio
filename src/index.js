import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import { AlertProvider } from "./components/alert/AlertContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider>
    <Provider store={store} >
      <App />
    </Provider>
  </AlertProvider>
);

