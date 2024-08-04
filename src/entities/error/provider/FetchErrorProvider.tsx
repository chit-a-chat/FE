import { Component, ErrorInfo, ReactNode } from "react";

import { ErrorBoundaryState } from "../model/ErrorBoundaryState";
import { getErrorBoundaryState } from "./getErrorBoundaryState";

type ErrorBoundaryProps = {
    children?: ReactNode;
};

/**
 * 에러 바운더리
 * 하위 트리에서 throw한 에러를 처리하는 코드
 * 컴포넌트 단위 전용.
 */
export class FetchErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = { shouldRethrow: false };

    /** 에러 Catch시 실행하는 함수 return값이 state가 됨.
     * componentDidCatch보다 먼저 실행 됨
     */
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return getErrorBoundaryState(error);
    }

    // 에러 캐치후 상태 바뀐 뒤 실행 함수.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
        if (this.state.shouldRethrow) {
            throw error;
        }
    }

    /** 다시 렌더링시키는 함수 */
    public handleRetry = () => {
        this.setState({ error: undefined, shouldRethrow: false });
    };

    render() {
        const { children } = this.props;
        const { error, handleType } = this.state;

        if (error) {
            /** 디자인 나오면 컴포넌트 분리 및 styled 적용 */
            return (
                <div>
                    <h1>{error.name}</h1>
                    <h3>{error.message}</h3>
                    {(() => {
                        switch (handleType) {
                            case "retry":
                                return <button onClick={this.handleRetry}>다시 시도</button>;
                            case "reload":
                                return (
                                    <button onClick={() => window.location.reload()}>
                                        새로고침
                                    </button>
                                );
                            case "back":
                                return (
                                    <button onClick={() => window.history.back()}>뒤로가기</button>
                                );
                            case "redirect-Home":
                                return (
                                    <button
                                        onClick={() =>
                                            window.history.pushState(
                                                {},
                                                "",
                                                `${window.location.origin}/home`
                                            )
                                        }
                                    >
                                        홈으로 이동
                                    </button>
                                );
                            case "redirect-Login":
                                return (
                                    <button
                                        onClick={() =>
                                            window.history.pushState(
                                                {},
                                                "",
                                                `${window.location.origin}/login`
                                            )
                                        }
                                    >
                                        로그인 하기
                                    </button>
                                );
                        }
                    })()}
                </div>
            );
        }

        return children;
    }
}
