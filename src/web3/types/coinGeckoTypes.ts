export type Order =
    | 'gecko_asc'
    | 'gecko_desc'
    | 'market_cap_asc'
    | 'market_cap_desc'
    | 'volume_asc'
    | 'volume_desc'
    | 'coin_name_asc'
    | 'coin_name_desc'
    | 'price_asc'
    | 'price_desc'
    | 'h24_change_asc'
    | 'h24_change_desc'
    | 'trust_score_desc'
    | 'name_asc'
    | 'name_desc'
    | 'open_interest_btc_asc'
    | 'open_interest_btc_desc'
    | 'trade_volume_24h_btc_asc'
    | 'trade_volume_24h_btc_desc';


export type CoinsAllParams = {
    /**
     * Order results by Order
     */
    // tslint:disable-next-line no-redundant-undefined
    order?: Order | undefined;
    /**
     * Total results per page
     */
    // tslint:disable-next-line no-redundant-undefined
    per_page?: number | undefined;
    /**
     * Page through results
     */
    // tslint:disable-next-line no-redundant-undefined
    page?: number | undefined;
    /**
     * Set to false to exclude localized languages in response.
     */
    // tslint:disable-next-line no-redundant-undefined
    localization?: boolean | undefined;
    /**
     * Include sparkline 7 days data
     */
    // tslint:disable-next-line no-redundant-undefined
    sparkline?: boolean | undefined;
}

export type SimplePriceParams = {
    /**
     * A single id or a list of coin ids to filter if you want specific results. Use coins.list() for a list of coin ids.
     */
    ids: string | string[];
    /**
     * A single id or a list of ids. Use simple.supportedVsCurrencies() for a list of vsCurrency ids.
     */
    vs_currencies: string | string[];
    /**
     * To include 24hr_vol.
     */
    // tslint:disable-next-line no-redundant-undefined
    include_24hr_vol?: boolean | undefined;
    /**
     * To include last_updated_at of price.
     */
    // tslint:disable-next-line no-redundant-undefined
    include_last_updated_at?: boolean | undefined;
    /**
     * To include market_cap, default: false.
     */
    // tslint:disable-next-line no-redundant-undefined
    include_market_cap?: boolean | undefined;
}

export interface CoinGeckoResponse  {
    /**
     * Whether the response status code returned a successful code (>200 && <300).
     */
    success: boolean;
    /**
     * The response status message
     */
    message: string;
    /**
     * The response status code
     */
    code: number;
    /**
     * The body data in JSON format from the request.
     */
}

export interface Image {
    thumb: string;
    small: string;
    large: string;
}

export interface CodeValueCurrency {
    [key:string]:number;
}
export interface MarketData {
    current_price: CodeValueCurrency;
    roi?: any;
    market_cap: CodeValueCurrency;
    market_cap_rank: number;
    total_volume: CodeValueCurrency;
    high_24h: CodeValueCurrency;
    low_24h: CodeValueCurrency;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: CodeValueCurrency;
    price_change_percentage_1h_in_currency: CodeValueCurrency;
    price_change_percentage_24h_in_currency: CodeValueCurrency;
    price_change_percentage_7d_in_currency: CodeValueCurrency;
    price_change_percentage_14d_in_currency: CodeValueCurrency;
    price_change_percentage_30d_in_currency: CodeValueCurrency;
    price_change_percentage_60d_in_currency: CodeValueCurrency;
    price_change_percentage_200d_in_currency: CodeValueCurrency;
    price_change_percentage_1y_in_currency: CodeValueCurrency;
    market_cap_change_24h_in_currency: CodeValueCurrency;
    market_cap_change_percentage_24h_in_currency: CodeValueCurrency;
    total_supply: string;
    circulating_supply: string;
}

export interface Localization {
    [key:string]:string;
}

export interface CoinListDetail {
    id: string;
    symbol: string;
    name: string;
    block_time_in_minutes: string;
    image: Image;
    market_data: MarketData;
    last_updated: Date;
    localization: Localization;
}

export interface CoinListResponse extends CoinGeckoResponse  {
    data: CoinListDetail[];
}
export interface PriceResponse extends CoinGeckoResponse {
    data:any;
}