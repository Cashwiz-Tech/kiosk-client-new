import axios, { AxiosError } from "axios";
import {
  GetCurrenciesResponse,
  GetCurrencyExchangeRateResponse,
  PossibleCurrencies,
} from "types/Currencies";
import { baseUrl } from "./config";

export const getCurrencyExchangeRate = async (currency: PossibleCurrencies) => {
  try {
    const data: GetCurrencyExchangeRateResponse = await fetch(
      baseUrl + "/get-exchange-rate",
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

export async function getCurrencies(
  partnerId: string
): Promise<GetCurrenciesResponse> {
  try {
    const response = await axios(
      `${baseUrl}/currencies?partnerId=${partnerId}`,
      { method: "get" }
    );

    return {
      currencies: response.data.currencies,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err.response?.data.error ||
          err.message || "Something went wrong",
      };
    }

    console.error(`Error when fetching currencies: ${err}`);
    return {
      error: "Something went wrong",
    };
  }
}
