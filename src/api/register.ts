import axios, { AxiosError } from "axios";
import { baseUrl } from "./config";

export type RegisterResponse = {
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

export async function register(token: string, data: FormData): Promise<RegisterResponse> {
  try {
    await axios(
      `${baseUrl}/register-new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
        data,
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
