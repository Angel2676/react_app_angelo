import { combineReducers } from "redux";
import { userReducer } from "../../../user/store/reducers";
import { coinsReducer } from "../../../web3/store";
 
export const rootReducers = combineReducers
(
    {
    userState:userReducer,
    coinState:coinsReducer
    },
)

    