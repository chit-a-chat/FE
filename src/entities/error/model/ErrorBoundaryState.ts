import { AxiosError } from "axios";

/**
 * @property {"retry" | "reload" | "redirect-Home" | "redirect-Login"} handleType - 다루는 방법
 *   - "retry": 다시 렌더링
 *   - "reload": 새로고침
 *   - "redirect-Home": 홈으로 이동
 *   - "redirect-Login": 로그인으로 이동
 *   - "back": 뒤로가기
 * @property {boolean} shouldRethrow - 다시 throw 하여 상위 바운더리로 보내기
 */
export type ErrorBoundaryState = {
    error?: Error | AxiosError;
    handleType?: "retry" | "reload" | "redirect-Home" | "redirect-Login" | "back";
    shouldRethrow: boolean;
};
