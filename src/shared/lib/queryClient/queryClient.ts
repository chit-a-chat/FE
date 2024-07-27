import { QueryClient } from "@tanstack/react-query";

/**
 * staleTime : 데이터 상태 fresh => stale로 변하는 시간 (stale된 후, 컴포넌트가 다시 마운트될 경우 stale을 확인 후 refetch 수행하여 fresh로 전환)
 * gcTime : 어떤 데이터를 전혀 사용하지 않는(어떤 옵저버에도 등록되어있지 않을 경우) 시간이 gcTime을 넘으면 캐시에서 삭제 (1000ms * 60 * 10 = 10분)
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 5, // 5초
            gcTime: 1000 * 60 * 10, // 10분
            retry: (count, error) => {
                const isRetry = count > 2 ? false : true;
                /** 추후 삭제 */
                if (isRetry) console.error(`api 에러,${count}회 재요청`, error);
                return isRetry;
            },
            retryDelay: (count) => 1000 * count,
        },
        mutations: {
            retry: (count, error) => {
                const isRetry = count > 2 ? false : true;
                /** 추후 삭제 */
                if (isRetry) console.error(`api 에러,${count}회 재요청`, error);
                return isRetry;
            },
            retryDelay: (count) => 1000 * count,
        },
    },
});
