export const phoneRegister = async (phoneNumber: string) => {
  try {
    console.log("phoneRegister", phoneNumber);
    const data = await fetch(
      "ec2-3-76-159-5.eu-central-1.compute.amazonaws.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      }
    ).then((res) => res.json());

    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
    return { success: false, message: "Can't registry your phone number!" };
  }
};
