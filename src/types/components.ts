export enum ComponentType {
  Dispenser,
  Acceptor,
  Camera,
  NFC,
  Printer,
};

export enum ComponentStatus {
  Active,
  Inactive,
};

export enum ComponentCode {
  TechnicalIssue = 45,
  CameraError = 38,
}

export type ComponentDTO = {
  componentType: ComponentType;
  code: ComponentCode | null;
  status: ComponentStatus;
};

export type CheckHealthResponse = {
  data: ComponentDTO[];
  error?: never;
} | {
  error: string;
  data?: never;
}
