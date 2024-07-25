import axios, { AxiosInstance, isAxiosError } from "axios";

export const changeAxiosConfig = () => {
    /** 기본 서버 URL */
    const BASE_URL = import.meta.env.BASE_URL ?? "http://localhost:5173";
    /** Axios 기본 설정 */
    const defaultConfig: AxiosInstance["defaults"] = {
        baseURL: BASE_URL,
        headers: {
            ...axios.defaults.headers,
        },
        timeout: 3000,
    };
    /** Global Axios 설정 변경 */
    axios.defaults = defaultConfig;
    /** request 인터셉터 */
    axios.interceptors.request.use(
        (req) => {
            const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN") ?? "BARER TOKEN";
            req.headers.Authorization = AUTH_TOKEN;
            return req;
        },
        (err) => {
            /** request 준비 중 에러 발생 */
            return Promise.reject(err);
        }
    );
    /** response 인터셉터 */
    axios.interceptors.response.use(
        /** httpStatus 200번대 일경우 res */
        (res) => {
            return res;
        },
        /** 에러 발생시 사전 처리(httpStatus 200 응답 제외 모든 것) */
        (err) => {
            if (isAxiosError(err)) {
                const statusCode = err.response?.status;
                /** httpStatus가 없는 에러 */
                if (!statusCode) {
                    return Promise.reject(err);
                }
                /** 서버 에러 */
                if (statusCode && 500 <= statusCode) {
                    return Promise.reject(err);
                }
                /** 클라이언트 에러 */
                if (statusCode && 400 <= statusCode) {
                    /** 인증 실패시 redirect 추후 refreshToken() 과 같은 함수 추가 */
                    if (statusCode === 401) window.location.href = "/";
                    return Promise.reject(err);
                }
            }

            return Promise.reject(err);
        }
    );
};
