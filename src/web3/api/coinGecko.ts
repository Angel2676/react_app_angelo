import CoinGecko from "coingecko-api";
import { CoinsAllParams, SimplePriceParams, CoinGeckoResponse, CoinListResponse, PriceResponse  } from "../types";

const CoinGeckoClient = new CoinGecko();

export const getCoinList = async (params?: CoinsAllParams):Promise<CoinGeckoResponse>=>{
    let data = await CoinGeckoClient.coins.all(params);
    console.log("COINLIST", data);
    return data;
}

export const getCoinsData = async (params: SimplePriceParams):Promise<CoinGeckoResponse>=>{
    let data = await CoinGeckoClient.simple.price(params);
    console.log("COINDATA", data);
    return data;
}