import { isAxiosError } from "axios";

import { CustomError } from "../model/CustomError";

export const handleError = (error: Error) => {
    /** axios Error 처리 */
    if (isAxiosError(error)) {
        switch (error.status) {
            case 400:
                console.error("요청 변수 확인");
                throw error;
            case 401:
                console.error("인증 실패");
                throw error;
            case 403:
                console.error("서버가 허용하지 않음");
                throw error;
            case 404:
                console.error("없는 api");
                throw error;
            case 500:
                console.error("서버 에러");
                throw error;
            default:
                console.error("기타 에러");
                throw error;
        }
    }
    if (error instanceof CustomError) {
        /** 위로 전파할 에러 */
        throw error;
    }
    throw new CustomError({
        name: error.name,
        errorCode: "-E001",
        message: error.message,
        stack: error.stack,
    });
};
