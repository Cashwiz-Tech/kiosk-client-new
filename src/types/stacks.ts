export type StackType =
  "HUNDRED_USD" |
  "FIFTY_EUR" |
  "FIFTY_ILS" |
  "HUNDRED_ILS" |
  "ONE_ILS" |
  "TWO_ILS" |
  "FIVE_ILS" |
  "TEN_ILS";

export type StackMoneyForm = "COINS" | "BILLS";

export type StackDTO = {
  stackType: StackType;
  form: StackMoneyForm;
  count: number;
};

export type FetchStacksResponse = {
  data: StackDTO[];
  error?: never;
} | {
  error: string;
  data?: never;
};
