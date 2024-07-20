import { CustomError } from "../model/CustomError";

export const handleError = (error: CustomError | Error) => {
    if (!(error instanceof CustomError) || !error.errorCode || !error.statusCode) {
        throw new CustomError({
            name: "알 수 없는 오류",
            errorCode: "E-001",
            message: "알 수 없는 오류",
        });
    }

    switch (error.statusCode) {
        case 400:
            console.error("요청 변수 확인");
            return error;
        case 401:
            console.error("인증 실패");
            return error;
        case 403:
            console.error("서버가 허용하지 않음");
            return error;
        case 404:
            console.error("없는 api");
            return error;
        case 500:
            console.error("서버 에러");
            return error;
        default:
            console.error("기타 에러");
            return error;
    }
};
