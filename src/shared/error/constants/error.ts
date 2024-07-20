import { ClassProperties } from "@shared/utils";

import { CustomError } from "../model/CustomError";

export const ERROR_CODE = {
    "E-001": "알 수 없는 에러",
    E101: "일반 에러",
    E202: "서비스 에러",
    E303: "어쩌고 에러",
    E404: "채팅 에러",
    E505: "인증 에러",
} as const;

export const STATUS_CODE = [400, 401, 403, 404, 500] as const;

export const ERROR: Record<string, Record<string, ClassProperties<CustomError>>> = {
    CHAT: {
        GET: {
            name: "헬로",
            errorCode: "E101",
            statusCode: 400,
            message: "123",
        },
    },
    GLOBAL: {
        DEFAULT: {
            name: "글로벌 에러",
            errorCode: "E-001",
            message: "123",
        },
    },
};
