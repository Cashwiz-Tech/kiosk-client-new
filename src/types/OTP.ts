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

export type ValidateOTPResponse = {
  error: string;
  validationErrors: null;
  token: null;
} | {
  validationErrors: ValidationErrors;
  error: null;
  token: null;
} | {
  token: string;
  validationErrors: null;
  error: null;
}
