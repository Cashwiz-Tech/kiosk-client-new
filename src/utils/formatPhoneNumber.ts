export function formatPhoneNumber(phone: string, uk?: boolean): string {
  let result = phone.trim();

  if (result.includes("-")) {
    result = result.slice(0, 3) + result.slice(4, result.length);
  }

  // for local development with ukrainian numbers only
  // const prefix = uk ? "380" : "972";
  const prefix = "972";

  result = prefix + result.substring(1);

  return result;
};
