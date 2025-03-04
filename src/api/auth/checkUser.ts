import { baseUrl } from "api/config";
import axios, { AxiosError } from "axios";
import { CheckUserResponse } from "types/CheckUser";

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
