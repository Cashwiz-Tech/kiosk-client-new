import { GetPaymentsDetailsResponse } from "types/Payments";
import { baseUrl } from "./config";

export const getPaymentsDetails = async (numberOfPayments: number) => {
  try {
    const data: GetPaymentsDetailsResponse = await fetch(
      baseUrl + "/payments-details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numberOfPayments }),
      }
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
