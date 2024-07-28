import { ErrorCode, StatusCode } from "./types";

export type CustomErrorProps = {
    name: string;
    errorCode?: ErrorCode;
    statusCode?: StatusCode;
    message: string;
    stack?: string;
};

export class CustomError extends Error {
    public errorCode?;
    public statusCode?;
    public name;
    public stack?;
    constructor({ name, errorCode, statusCode, message, stack }: CustomErrorProps) {
        super(message);
        this.name = name;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.stack = stack;
    }
}
