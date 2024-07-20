import { ERROR_CODE, STATUS_CODE } from "../constants";

export type StatusCode = (typeof STATUS_CODE)[number];
export type ErrorCode = keyof typeof ERROR_CODE;
