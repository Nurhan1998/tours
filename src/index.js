import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';


import index from './redux';
import { Provider } from 'react-redux';




  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
          <SimpleReactLightbox>
            <Provider store={index}>
              <App />
            </Provider>
          </SimpleReactLightbox>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
