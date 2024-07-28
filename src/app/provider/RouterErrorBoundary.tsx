import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { RouterErrorComponent } from "@widgets/error";

/** 라우터 Loader, action 에서 말생하는 에러 */
export const RouterErrorBoundary = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <RouterErrorComponent message="없는 페이지 입니다." />;
        }

        if (error.status === 401) {
            return <RouterErrorComponent message="권한 이 없습니다." />;
        }

        if (error.status === 503) {
            return <RouterErrorComponent message="서버가 다운된 것 같습니다." />;
        }
    }

    return <RouterErrorComponent message="데이터를 제대로 불러오지 못했습니다." />;
};
