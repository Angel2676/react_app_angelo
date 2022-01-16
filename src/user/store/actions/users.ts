import { createAction } from "typesafe-actions";
import { userList, startSagaPayload } from "../.." 


const startSagaLoadusers = "users/startSagaLoad"
const callLoadusers = "users/callLoad";
const usersLoaded = "users/loaded";

export const startSagaLoaduserAction = createAction(startSagaLoadusers)<startSagaPayload>();

export const callLoadUserAction = createAction(callLoadusers)();

export const usersLoadedAction = createAction(usersLoaded)<userList[]>();