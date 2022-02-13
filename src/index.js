import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import reportWebVitals from './reportWebVitals';
import ListProvider from './components/providers/ListProvider';
import FormProvider from './components/providers/FormProvider';
import ModalProvider from './components/providers/ModalProvider';

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <FormProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </FormProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
