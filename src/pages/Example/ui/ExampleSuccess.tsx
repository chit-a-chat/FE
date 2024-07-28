import { Suspense } from "react";

import { ExampleFetchComponent } from "@widgets/example";

import { FetchErrorBoundary } from "@entities/error";

export const ExampleSuccess = () => {
    return (
        <div>
            <div>테스트 페이지</div>
            <FetchErrorBoundary fallback={<div>실패</div>}>
                <Suspense fallback={<div>로딩중...</div>}>
                    <ExampleFetchComponent isSuccess={true} />
                </Suspense>
            </FetchErrorBoundary>
        </div>
    );
};
