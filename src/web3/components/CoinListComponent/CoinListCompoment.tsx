import { useStoreCoins } from "../../store";
import { useMemo } from "react";
import { Col, Row } from "react-bootstrap";

export const CoinListComponent =()=> {

    const {storecoins} = useStoreCoins();

    const showListaCoin = useMemo(()=>{

        const lista = storecoins.map((c)=>{
        return(
            <Row key={c.id}>
                <Col><img src= {c?.image.thumb} alt="" /></Col>
                <Col><b>{c.name}</b></Col>
                <Col><b>{c.symbol}</b></Col>
                <Col><b>{c.market_data.price_change_24h}</b></Col>
            </Row>
        )
    });

    return lista;

    },[storecoins])

    return (<>{showListaCoin}</>);
}