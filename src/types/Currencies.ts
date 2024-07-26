export type PossibleCurrencies = "USD" | "EUR";

export interface GetCurrencyExchangeRateResponse {
  data: {
    exchangeRate: {
      currency: PossibleCurrencies;
      rate: number;
    };
  };
}
