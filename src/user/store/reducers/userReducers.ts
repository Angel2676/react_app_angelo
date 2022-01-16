import * as actions from "../actions";
import { userState } from "../../types";
import { action, ActionType, createReducer } from "typesafe-actions";


const initialState:userState={
    loading : false,
    users:[]
}

export type UserActionslist = ActionType<typeof actions>;
export type callLoadUsersActionType = ActionType<typeof actions.callLoadUserAction>;
export type usersLoadedActionType = ActionType<typeof actions.usersLoadedAction>;

const callLoadUsersActionType =(state:userState, action:callLoadUsersActionType)
    :userState =>({
        ...state, loading:true
    });

const usersLoadedActionTypeCase =(state:userState, action:usersLoadedActionType)
    :userState =>({
        ...state, users:[...action.payload], loading:false
    });

    export const userReducer = createReducer<userState, UserActionslist>(initialState)
    .handleAction(
        actions.callLoadUserAction,
        callLoadUsersActionType
    ). handleAction (
        actions.usersLoadedAction,
        usersLoadedActionTypeCase
    )