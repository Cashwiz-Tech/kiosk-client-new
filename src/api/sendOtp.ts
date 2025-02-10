import axios, { AxiosError } from "axios";
import { CustomerInfo } from "types/Customer";
import { baseUrl } from "./config";

export type SendOTPError = {
  error: string;
  customer: null;
  validationErrors: null,
} | {
  validationErrors: {
    [key: string]: string;
  };
  error: null
  customer: null;
} | {
  error: null;
  validationErrors: null;
  customer: CustomerInfo;
};

export async function sendOtp({
  phoneNumber,
  personalId,
  channel,
}: {
  phoneNumber: string;
  personalId: string;
  channel: "sms" | "call",
}): Promise<SendOTPError> {
  try {
    const response = await axios(
      `${baseUrl}/send-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          phoneNumber,
          personalId,
          channel,
        },
      }
    );

    return {
      error: null,
      validationErrors: null,
      customer: response.data.customer || undefined,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data) {
        if (error.response.data.errors) {
          return {
            error: null,
            customer: null,
            validationErrors: error.response.data.errors,
          }
        }

        return {
          validationErrors: null,
          customer: null,
          error: error.response.data.error,
        };
      }

      return {
        validationErrors: null,
        customer: null,
        error: error.message,
      };
    }

    console.error(`Unexpected error when sending OTP: ${error}`);

    return {
      validationErrors: null,
      customer: null,
      error: "Something went wrong",
    };
  }
}
