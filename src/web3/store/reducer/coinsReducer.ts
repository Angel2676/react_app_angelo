
import * as coinActions from "../actions";
import { coinState } from "../../types";
import { ActionType, createReducer } from "typesafe-actions";

const initialState:coinState={
    loading : false,
    coins:[]
}

export type CoinsActionsList = ActionType<typeof coinActions>;

export type startSagaCoinListActionType = ActionType<typeof coinActions.startSagaCoinListAction>;

export type coinsLoadedActionType = ActionType<typeof coinActions.coinsLoadedAction>;

export type callCoinsLoadActionType = ActionType<typeof coinActions.callCoinsLoadAction>;


const callCoinsLoadActionTypeCase =(state:coinState, action:callCoinsLoadActionType)
    :coinState =>({
        ...state, loading:true
    });

const coinsLoadedActionTypeCase =(state:coinState, action:coinsLoadedActionType)
:coinState =>({
    ...state, coins:[...action.payload], loading:false
});

export const coinsReducer = createReducer<coinState, CoinsActionsList>(initialState)
.handleAction(
    coinActions.coinsLoadedAction,
    coinsLoadedActionTypeCase
).handleAction (
    coinActions.callCoinsLoadAction,
    callCoinsLoadActionTypeCase
)