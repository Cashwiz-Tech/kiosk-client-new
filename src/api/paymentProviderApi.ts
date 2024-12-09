import axios, { AxiosError } from "axios";
import { MakePaymentRequest } from "types/PaymentProvider";
import { baseUrl } from "./config";

export const makePayment = async (args: MakePaymentRequest) => {
  try {
    const response = await axios.post(baseUrl + "/make-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });
    return response.data;
  } catch (error) {
    const errorData = error as AxiosError;
    if (errorData?.response?.status === 503) {
      return {
        success: false,
        message: "STACK_ERROR",
      };
    } else {
      return {
        success: false,
        message: "PAYMENT_ERROR",
      };
    }
  }
};
