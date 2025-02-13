export type RegisterResponse = {
  error: string;
  validationErrors: null,
} | {
  validationErrors: {
    [key: string]: string;
  };
  error: null
} | {
  error: null;
  validationErrors: null;
};
