import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APPobj from './App'; // importare un oggetto da app.tsx
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducers } from './shared/store';
import createSagaMiddleware from "redux-saga"
import { rootSaga } from './shared/store/sagas';

var win = window as any;

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);


// type persona ={
//   nome:string,
//   cognome:string
// }

// const lorenzo: persona ={
//   nome:"lorenzo",
//   cognome:"baccini"
// }

// const{nome,cognome}=lorenzo;

const {App, app2} = APPobj; // assegnare gli oggetti ad una const

ReactDOM.render(
  <React.StrictMode>
    <div>
    {/* NOME: {nome}
    LORENZO.NOME: {lorenzo.nome} */}
    <Provider store={store}>
      <App />
    </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
