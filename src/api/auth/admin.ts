import { baseUrl } from "api/config";
import axios, { AxiosError } from "axios";
import { AdminLoginPayload } from "types/AdminLogin";

export async function adminLogin(
  { partnerId, code }: AdminLoginPayload
): Promise<string | undefined> {
  try {
    const response = await axios(
      `${baseUrl}/admin/login`,
      {
        method: "post",
        data: {
          partnerId,
          code,
        },
      },
    );

    return response.data.token;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return;
      }

      console.log(`Admin login error: ${error.message}`);
      return;
    }

    console.log(`Admin login error: ${error}`);
    return;
  }
}
