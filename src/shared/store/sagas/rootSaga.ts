import { all } from "redux-saga/effects"
import { userSaga } from "../../../user"
import { coinSaga } from "../../../web3/store"

export function* rootSaga() {
    yield all
    ([ 
        userSaga(),
        coinSaga() 
    ])
}