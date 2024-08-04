import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { RouterErrorComponent } from "@widgets/error";

/** 라우터 Loader, action 에서 말생하는 에러 잡기
 * (필요한 데이터를 못받으면 페이지 띄우는 의미가 없기 때문.)
 * */
export const RouterErrorBoundary = () => {
    const error = useRouteError();
    /** 라우팅에서 발생하는 에러들 */
    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <RouterErrorComponent message="없는 페이지 입니다." />;
            case 401:
                return <RouterErrorComponent message="권한이 없습니다." />;
            case 503:
                return <RouterErrorComponent message="서버가 다운된 것 같습니다." />;
            default:
                return <RouterErrorComponent message="데이터를 제대로 불러오지 못했습니다." />;
        }
    }
};
