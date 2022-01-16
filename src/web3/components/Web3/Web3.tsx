import { useEffect, useMemo, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { tokenAddress } from "..";
import web3 from "web3";
import tokenABI from "./tokenABI";
import { useCoinFunctions } from "../../hooks";
import { CoinListComponent } from "../CoinListComponent";
import { startSagaLoaduserAction } from "../../../user";



export const Web3 =()=>{

    const [currentAccount, setCurrentAccount] = useState();
    const [linkBalance, setLinkBalance] = useState(0);
    const {ethereum} = window as any;
    const linkaddress : tokenAddress = {
        address: "0x01be23585060835e02b77ef475b0cc51aa1e0709",
        token: "LINK",
    }
    const { startSagaLoadCoins } = useCoinFunctions();
    const web3instance = new web3(ethereum);
    
    const checkAccounts = async ()=>{


        if(!ethereum) {
            alert("installare metamask e rilanciare l'applicazione")
            return;
        }
        else {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if(accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account", account);
                setCurrentAccount(account);
            }
            else {
                console.log("No authorized account found");
            }
        }

    }

    const connectWalletHandler = async ()=>{

        const {ethereum} = window as any;

        if(!ethereum) {
            alert("Please install Meta,ask")
            return;
        }
        else {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            if(accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an account", accounts[0]);
                setCurrentAccount(accounts[0]);
            }
            else {
                console.log(err);
            }
        }

    }

    useEffect(()=>{
        if(currentAccount) {
            getBalance();
        }

    },[currentAccount])
    
    const getBalance = async ()=>{
        const tokenInst = new web3instance.eth.Contract(tokenABI as any, linkaddress.address);
        const balance = await tokenInst.methods.balanceOf(currentAccount).call()
        setLinkBalance(balance);
    }


    useEffect(()=>{
        
        checkAccounts();
        startSagaLoadCoins(undefined);
        setInterval(() => {
            startSagaLoadCoins(undefined);
        }, 10000);

    },[])

    

    const showConnectAccount = useMemo(()=>{
        if(currentAccount) {
            return <span>Connected account : {currentAccount} </span>
        }
        else {
            return <Button onClick={() =>{connectWalletHandler()}}>Connect Metamask</Button>
        }
    },[currentAccount])
    
    return (
    <> 
        <Row>
            <div>
                <h1>WEB3</h1>
                <Col>{showConnectAccount}</Col>
                <Col>Link Token Balance: {linkBalance}</Col>
            </div>
        </Row>
        <Row>
            <Col><Button onClick={()=>{startSagaLoadCoins(undefined)}}>Clicca qui</Button></Col>
            <CoinListComponent></CoinListComponent>
        </Row>
    </>
    );

}

function err(err: any) {
    throw new Error("Function not implemented.");
}
