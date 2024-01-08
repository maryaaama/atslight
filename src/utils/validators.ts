const regexPhoneNumber = /^0[^0]\d{9}$/;
const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export function isValidPhoneNumber(input: string): boolean {
  return regexPhoneNumber.test(input);
}

export function isValidEmail(input: string): boolean {
  return regexEmail.test(input);
}
