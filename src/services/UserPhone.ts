import { parsePhoneNumberFromString } from "libphonenumber-js";

export function validatePhone(phone: string | undefined | null): boolean {
  if (!phone) return false;

  const phoneNumber = parsePhoneNumberFromString(phone, "BR");

  return phoneNumber ? phoneNumber.isValid() : false;
}
