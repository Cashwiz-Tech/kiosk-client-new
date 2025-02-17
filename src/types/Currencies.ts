export type PossibleCurrencies = "USD" | "EUR";

export interface GetCurrencyExchangeRateResponse {
  data: {
    exchangeRate: {
      currency: PossibleCurrencies;
      rate: number;
    };
  };
}

export type CurrencyDTO = {
  name: PossibleCurrencies;
  rate: number;
  profitSelling: number;
  profitBuying: number;
};

export type GetCurrenciesResponse = {
  error: string;
  currencies?: never;
} | {
  currencies: CurrencyDTO[];
  error?: never;
};
