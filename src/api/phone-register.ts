export const phoneRegister = async (phoneNumber: string) => {
  try {
    const data = await fetch("https://cashwizkiosk.info/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    }).then((res) => res.json());
    return data;
  } catch (e) {
    console.log(e);
    return { success: false, message: "Can't registry your phone number!" };
  }
};
