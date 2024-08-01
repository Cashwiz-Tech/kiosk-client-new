import { PossibleCurrencies } from "types/Currencies";
import { baseUrl } from "./config";

export const makePayment = async (args: {
  numberOfPayments: number;
  amount: number;
  currency: PossibleCurrencies;
}) => {
  try {
    const data = fetch(baseUrl + "/make-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    }).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
