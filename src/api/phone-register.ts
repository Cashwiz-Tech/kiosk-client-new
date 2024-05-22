export const phoneRegister = async (phoneNumber: string) => {
  try {
    console.log("phoneRegister", phoneNumber);
    const data = await fetch("https://cashwizkiosk.info/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    }).then((res) => res.json());

    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
    return { success: false, message: "Can't registry your phone number!" };
  }
};
