export type StackType =
  "FIFTY_USD" |
  "HUNDRED_USD" |
  "FIFTY_EUR" |
  "HUNDRED_EUR" |
  "FIFTY_ILS" |
  "HUNDRED_ILS";

export type StackMoneyForm = "COINS" | "BILLS";

export type StackDTO = {
  stackType: StackType;
  form: StackMoneyForm;
  count: number;
};
