import axios, { AxiosError } from "axios";
import { CheckHealthResponse } from "types/components";
import { baseUrl } from "./config";

export async function checkHealth(token: string): Promise<
  CheckHealthResponse
> {
  try {
    const response = await axios(
      `${baseUrl}/components/check-health`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    return {
      data: response.data.components || [],
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.error ||
          error.message || "Something went wrong",
      };
    }

    console.error(`Unexpected error when checking health of components: ${error}`);

    return {
      error: "Something went wrong",
    };
  }
}
