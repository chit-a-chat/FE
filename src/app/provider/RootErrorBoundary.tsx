import { Component, ReactNode } from "react";

import { RootErrorModal } from "@widgets/error/ui/RootErrorModal";

import { ErrorBoundaryState } from "@entities/error";

type ErrorBoundaryProps = {
    children?: ReactNode;
};
type RootErrorBoundaryState = Omit<ErrorBoundaryState, "shouldRethrow">;

// 함수형으로 만들려면 라이브러리 다운 필요.
export class RootErrorBoundary extends Component<ErrorBoundaryProps, RootErrorBoundaryState> {
    public state: RootErrorBoundaryState = {};

    // Error 캐치시 return 값으로 상태 변경
    static getDerivedStateFromError({ error }: { error: Error }): RootErrorBoundaryState {
        return { error: error };
    }
    /** 못잡은 에러 잡기. 어떻게 해결할지 논의 필요*/
    handleUncatchedError = (e: PromiseRejectionEvent): void => {
        e.preventDefault();
        if (e.reason instanceof Error) {
            this.setState({ error: e.reason });
        }
    };

    componentDidMount(): void {
        window.addEventListener("unhandledrejection", this.handleUncatchedError);
    }
    componentWillUnmount(): void {
        window.removeEventListener("unhandledrejection", this.handleUncatchedError);
    }

    render() {
        const {
            props: { children },
            state: { error },
        } = this;
        return (
            <>
                {/* 에러 시 에러 모달 or 토스트 출력, 작업하며 나오는 에러들을 보며 어떻게 안잡히는 에러들 띄어줄지 연구필요 */}
                {error && <RootErrorModal title={error.name} message={error.message} />}
                {children}
            </>
        );
    }
}
