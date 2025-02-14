import { CustomerInfo } from "./Customer";

export type CheckUserResponse = {
  error: string;
  customer: null;
  validationErrors: null,
} | {
  validationErrors: {
    [key: string]: string;
  };
  error: null
  customer: null;
} | {
  error: null;
  validationErrors: null;
  customer: CustomerInfo | null;
};
