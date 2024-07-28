import { GetPaymentsDetailsResponse } from "types/Payments";

export const getPaymentsDetails = async (numberOfPayments: number) => {
  try {
    const data: GetPaymentsDetailsResponse = await fetch(
      "https://cashwizkiosk.info:8080/api/payments-details",
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
