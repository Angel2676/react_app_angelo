import { createSelector } from "reselect";
import { coinState }  from "../../";
import { useSelector } from "react-redux";

const sliceState = (state:{coinState : coinState}) => state.coinState;
const storeCoinsSelector = createSelector(sliceState, slice=>slice.coins);
const loadingSelector = createSelector(sliceState, slice=>slice.loading);

export const useStoreCoins=()=>{
    const storecoins = useSelector(storeCoinsSelector);
    return {storecoins}
}

export const useCoinsAreLoading = () =>{
    const loading = useSelector(loadingSelector);
    return  { loading }
}