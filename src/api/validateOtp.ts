import axios, { AxiosError } from "axios";
import { baseUrl } from "./config";

export type ValidateOTPResponse = {
  error: string;
  validationErrors: null,
} | {
  validationErrors: {
    [key: string]: string;
  };
  error: null
} | {
  error: null;
  validationErrors: null;
};

export async function validateOtp({
  phoneNumber,
  otp,
}: {
  phoneNumber: string;
  otp: string,
}): Promise<ValidateOTPResponse> {
  try {
    await axios(
      `${baseUrl}/validate-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          phoneNumber,
          otp,
        },
      }
    );

    return {
      error: null,
      validationErrors: null,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data.errors) {
        return {
          error: null,
          validationErrors: error.response.data.errors,
        }
      }

      const errorMessage = error.response?.data.error ||
        error.message || "Something went wrong";

      return {
        validationErrors: null,
        error: errorMessage,
      };
    }

    console.error(`Unexpected error when validating OTP: ${error}`);

    return {
      validationErrors: null,
      error: "Something went wrong",
    };
  }
}
