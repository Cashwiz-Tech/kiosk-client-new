import axios, { AxiosError } from "axios";
import { FetchStacksResponse, StackMoneyForm } from "types/stacks";
import { baseUrl } from "./config";

export async function fetchStacks({
  token,
  form,
}: {
  token: string;
  form?: StackMoneyForm;
}): Promise<
  FetchStacksResponse
> {
  try {
    let query = "";
    if (form) {
      query = `?form=${form}`;
    }
    const response = await axios(
      `${baseUrl}/stacks${query}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    return {
      data: response.data.stacks || [],
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.error ||
          error.message || "Something went wrong",
      };
    }

    console.error(`Unexpected error when fetching stacks: ${error}`);

    return {
      error: "Something went wrong",
    };
  }
}

