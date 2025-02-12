import { ValidationErrors } from "./ValidationErrors";

export type OTPResponse = {
  error: string;
  validationErrors: null;
} | {
  validationErrors: ValidationErrors;
  error: null;
} | {
  validationErrors: null;
  error: null;
};
