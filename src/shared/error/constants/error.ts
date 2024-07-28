import { ClassProperties } from "@shared/utils";

import { CustomError } from "../model/CustomError";

export const ERROR_CODE = {
    "-E001": "네트워크 에러",
    "-E002": "런타임 에러",
    E101: "일반 에러",
    E202: "서비스 에러",
    E303: "어쩌고 에러",
    E404: "채팅 에러",
    E505: "인증 에러",
} as const;
/**
 * 4xx
 * @constant 400 클라이언트가 잘못 요청
 * @constant 401 해당 리소스 접근 권한 인증 불가.
 * @constant 403 인증은 되었지만 권한이 없음.
 * @constant 404 요청 리소스 없거나, 리소스 숨길경우.
 * 5xx
 * @constant 500 서버가 처리 방법을 모르는 경우
 * @constant 502 게이트웨이 작업 중에 잘못되었음.
 */
export const STATUS_CODE = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
} as const;

export const ERROR_TEMPLATES: Record<string, Record<string, ClassProperties<CustomError>>> = {
    CHAT: {
        GET: {
            name: "채팅 상대방이 탈퇴하여 찾을 수 없습니다.",
            errorCode: "E101",
            statusCode: 400,
            message: "123",
        },
    },
    GLOBAL: {
        DEFAULT: {
            name: "네트워크 에러",
            errorCode: "-E001",
            message: "123",
        },
    },
    LOCAL: {
        DEFAULT: {
            name: "해당 index는 없는 index입니다.",
            errorCode: "-E002",
            message: "메시지",
        },
    },
};
