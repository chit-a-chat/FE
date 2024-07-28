import { ERROR_CODE, STATUS_CODE } from "../constants";

export type StatusCode = keyof typeof STATUS_CODE;
export type ErrorCode = keyof typeof ERROR_CODE;
