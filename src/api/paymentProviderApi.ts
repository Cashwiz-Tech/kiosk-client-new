import { MakePaymentRequest } from "types/PaymentProvider";

export const getPaymentsDetails = async (numberOfPayments: number) => {
  try {
    const data = await fetch("http://localhost:8080/api/make-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ numberOfPayments }),
    }).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
