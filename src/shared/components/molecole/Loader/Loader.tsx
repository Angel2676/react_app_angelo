import { Spinner } from "react-bootstrap";
import { useMemo } from "react";
import { useUsersAreLoading } from "../../../../user/store";
import { useCoinsAreLoading } from "../../../../web3/store";

export const Loader = ()=>{

    const { loading } = useUsersAreLoading(); 
    const { loading : coinsLoading } = useCoinsAreLoading();

    const show = useMemo(()=>{

        return (loading || coinsLoading) ?
        <div style={{display:"block", position:"absolute", width:"100%", minHeight:"768px", backgroundColor:"#00000030", zIndex:"999"}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div> 
        : null

    },[loading, coinsLoading])

    return (<>{show}</>);
}