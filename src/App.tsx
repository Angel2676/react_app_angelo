import React from 'react';
import logo from './logo.svg';
import './App.css';
import MioComponente from './MioComponente';
import ContainerApp from './ContainerApp';
import { SearchBar, Loader } from './shared/components';
import { AppRoutes } from "./shared/routes";
import { Link, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/web3">Web3</Link>
          </li>
        </ul>
  
      <AppRoutes></AppRoutes>
      </div>

    </Router>

  );

    {/* <ContainerApp cssclass="wrapper container-fluid"></ContainerApp> */}
    {/* <div>
      <MioComponente label='Titolo' cssclass="MioTitolo"></MioComponente>
      <MioComponente label='Seconda'></MioComponente>
      <MioComponente label='Titolo' cssclass="MioTitolo"></MioComponente>
    </div> */}
}

const app2 = ()=> {
  return (<a>APP2</a>);
}

export default {App, app2};

// const a = {
//   App: App,           stessa cosa della riga 30
//   app2:app2         
// }
