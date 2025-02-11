import axios, { AxiosError } from "axios";
import { CustomerInfo } from "types/Customer";
import { baseUrl } from "./config";

export type CheckUserResponse = {
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
  customer: CustomerInfo | null;
};

export async function checkUser({
  phoneNumber,
  personalId,
}: {
  phoneNumber: string;
  personalId: string;
}): Promise<CheckUserResponse> {
  try {
    const response = await axios(
      `${baseUrl}/check-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          phoneNumber,
          personalId,
        },
      }
    );

    return {
      error: null,
      validationErrors: null,
      customer: response.data.customer,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return {
          error: null,
          validationErrors: null,
          customer: null,
        };
      }

      if (error.response?.data.errors) {
        return {
          error: null,
          customer: null,
          validationErrors: error.response.data.errors,
        }
      }

      const errorMessage = error.response?.data.error ||
        error.message || "Something went wrong";

      return {
        customer: null,
        validationErrors: null,
        error: errorMessage,
      };
    }

    console.error(`Unexpected error when checking user: ${error}`);

    return {
      validationErrors: null,
      customer: null,
      error: "Something went wrong",
    };
  }
}

