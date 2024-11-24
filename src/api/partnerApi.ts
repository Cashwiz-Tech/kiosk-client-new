import { baseUrl } from "./config";

export const getPartnerData = async (partnerId: number) => {
  try {
    const data: { pinpadId: string } = await fetch(
      baseUrl + "/get-partner-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ partnerId }),
      }
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
