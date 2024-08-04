import { Suspense } from "react";

import { ExampleFetchComponent } from "@widgets/example";

import { FetchErrorBoundary } from "@entities/error";

export const ExampleFail = () => {
    return (
        <div>
            <div>테스트 페이지</div>
            <FetchErrorBoundary>
                <Suspense fallback={<div>로딩중...</div>}>
                    <ExampleFetchComponent isSuccess={false} />
                </Suspense>
            </FetchErrorBoundary>
        </div>
    );
};
