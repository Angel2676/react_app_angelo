import * as actions from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";

import { getCoinList} from "../../api";
import { CoinListResponse } from "../..";

function* loadCoinsSaga(action: ReturnType<typeof actions.startSagaCoinListAction>) {
    yield put (actions.callCoinsLoadAction());
    let resp: CoinListResponse = yield call( getCoinList,action.payload)
    yield put (actions.coinsLoadedAction(resp.data));
}

export function* coinSaga (){
    yield takeLatest(actions.startSagaCoinListAction, loadCoinsSaga)
}