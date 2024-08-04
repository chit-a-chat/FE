import { isAxiosError } from "axios";

import { ErrorBoundaryState } from "../model/ErrorBoundaryState";

export const getErrorBoundaryState = (error: Error): ErrorBoundaryState => {
    if (isAxiosError(error)) {
        switch (error.status) {
            /** 400 - 형식에 맞지 않은 api 사용 */
            /** 401 - 인증 실패 */
            /** 서버 메시지를 보여줌. */
            case 400:
            case 401:
                return {
                    handleType: "retry",
                    shouldRethrow: false,
                    error: { name: error.name, message: error.message },
                };
            /** 토큰은 존재하지만 권한이 없음. */
            case 403:
                return {
                    handleType: "back",
                    shouldRethrow: false,
                    error: { name: "접근 권한이 업습니다.", message: "관리자에게 문의해보세요." },
                };
            /** 404 - 존재하지 않는 리소스 */
            case 404:
                return {
                    handleType: "reload",
                    shouldRethrow: false,
                    error: {
                        name: "존재하지 않는 데이터입니다.",
                        message: "존재하지 않는 데이터입니다. 새로고침해 주세요.",
                    },
                };
            /** 500 - 서버에서 */
            /** 기타 에러 */
            case 500:
            default:
                return {
                    handleType: "retry",
                    shouldRethrow: false,
                    error: {
                        name: "시스템 오류가 발생했습니다.",
                        message: "문제 해결을 위해 노력하고 있습니다.\n잠시 후 다시 시도해주세요.",
                    },
                };
        }
    }

    /**
     * 알려지지 않은 에러
     * shouldRethrow 여부에 대한 근거가 필요.(코딩 하면서 보완)
     */
    return {
        handleType: "retry",
        shouldRethrow: false,
        error: {
            name: "알 수 없는 에러가 발생했습니다.",
            message: "알 수 없는 에러가 서버로 전송되었습니다. 잠시 후 다시 시도해주세요.",
        },
    };
};
