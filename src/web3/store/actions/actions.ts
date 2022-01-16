import { createAction } from "typesafe-actions";
import { CoinListDetail, CoinsAllParams } from "../..";

const startSagaCoinList = "web3/startSagaList";
const coinsLoaded = "web3/loaded";
const callCoinsLoad = "web3/callcoinsLoad"


export const startSagaCoinListAction = createAction(startSagaCoinList)<CoinsAllParams | undefined>();

export const coinsLoadedAction = createAction(coinsLoaded)<CoinListDetail[]>();

export const callCoinsLoadAction = createAction(callCoinsLoad)();