import React from 'react';
import ReactDOM from 'react-dom';
// place this before index.css in case your customized index.css wants to override some change
import 'semantic-ui-css/semantic.min.css' 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM doesn't refer to the same DOM we know. 
// Instead, it refers to a Virtual DOM. The Virtual DOM is a key piece of how React works.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
