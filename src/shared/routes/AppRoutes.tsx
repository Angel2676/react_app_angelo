import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Loader, SearchBar } from "../components";
import logo  from "../../logo.svg"
import { Web3 } from "../../web3";

export const AppRoutes = ()=>{

    return (
        
        <Routes>

            {/*HOME*/}
            <Route path="/" element={<>
            
                <a>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                            Modificato <code>src/App.tsx</code> e grazie.
                            </p>
                            <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Learn React
                            </a>
                        </header>
                    </div>
                </a>
            
            </>}>
            </Route>

            {/*USERS*/}
            <Route path="/users" element={
                <>
                    <Loader/>
                    <div className="text-center">
                        <SearchBar></SearchBar>
                    </div>
                </>
            }></Route>

            {/*WEB3*/}
            
            <Route path="/web3" element={
                <>
                    <Loader/>
                    <Web3/>
                </>
            }></Route>
        </Routes>
        
    );

}