import { GetPaymentsDetailsResponse } from "types/Payments";
import { baseUrl } from "./config";

export const getPaymentsDetails = async (
  numberOfPayments: number,
  partnerId?: string
) => {
  try {
    const data: GetPaymentsDetailsResponse = await fetch(
      baseUrl + "/payments-details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numberOfPayments,
          partnerId: partnerId ? Number(partnerId) : partnerId,
        }),
      }
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
