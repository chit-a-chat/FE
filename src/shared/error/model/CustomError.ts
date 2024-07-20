import { ErrorCode, StatusCode } from "./types";

export type CustomErrorProps = {
    name: string;
    errorCode?: ErrorCode;
    statusCode?: StatusCode;
    message: string;
};

export class CustomError extends Error {
    public errorCode?;
    public statusCode?;
    public name;
    constructor({ name, errorCode, statusCode, message }: CustomErrorProps) {
        super(message);
        this.name = name;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
}
