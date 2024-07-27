import {
  GetCurrencyExchangeRateResponse,
  PossibleCurrencies,
} from "types/Currencies";

export const getCurrencyExchangeRate = async (currency: PossibleCurrencies) => {
  try {
    const data: GetCurrencyExchangeRateResponse = await fetch(
      "https://3.121.101.253:8080/api/get-exchange-rate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency }),
      }
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
