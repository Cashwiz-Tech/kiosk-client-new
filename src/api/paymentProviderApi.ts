import { baseUrl } from "./config";
import { MakePaymentRequest } from "types/PaymentProvider";

export const makePayment = async (args: MakePaymentRequest) => {
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
