import * as actions from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";

import { callUsersList } from "../../api";
import { userListResponse } from "../..";

function* loadUsersSaga(action: ReturnType<typeof actions.startSagaLoaduserAction>) {
    yield put (actions.callLoadUserAction());
    let userResponse: userListResponse = yield call( callUsersList,action.payload.page )
    yield put (actions.usersLoadedAction(userResponse.data));
}

export function* userSaga (){
    yield takeLatest(actions.startSagaLoaduserAction, loadUsersSaga)
}