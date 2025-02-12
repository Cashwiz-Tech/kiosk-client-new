import { baseUrl } from "api/config";
import axios, { AxiosError } from "axios";
import { OTPResponse } from "types/OTP";

export async function sendOtp({
  phoneNumber,
  channel,
}: {
  phoneNumber: string;
  channel: "sms" | "call",
}): Promise<OTPResponse> {
  try {
    await axios(
      `${baseUrl}/send-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          phoneNumber,
          channel,
        },
      }
    );

    return {
      error: null,
      validationErrors: null,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return {
          error: null,
          validationErrors: null,
        };
      }

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

    console.error(`Unexpected error when sending OTP: ${error}`);

    return {
      validationErrors: null,
      error: "Something went wrong",
    };
  }
}

export async function validateOtp({
  phoneNumber,
  otp,
}: {
  phoneNumber: string;
  otp: string,
}): Promise<OTPResponse> {
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
