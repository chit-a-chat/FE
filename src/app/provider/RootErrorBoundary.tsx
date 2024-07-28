import { Component, ErrorInfo, ReactNode } from "react";

import { RootErrorModal } from "@widgets/error/components/RootErrorModal";

type ErrorBoundaryProps = {
    children?: ReactNode;
};

type State =
    | {
          hasError: false;
      }
    | {
          hasError: true;
          error: Error;
      };

// 함수형으로 만들려면 라이브러리 다운 필요.
export class RootErrorBoundary extends Component<ErrorBoundaryProps, State> {
    public state: State = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        // Error 캐치시 상태 변경
        return { hasError: true, error: error };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // 에러 캐치시 실행 함수.
        console.error(error, errorInfo);
    }

    render() {
        const {
            props: { children },
            state,
        } = this;

        if (state.hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            const { name, message } = state.error;
            return (
                <>
                    <RootErrorModal title={name} message={message} />
                    {children}
                </>
            );
        }

        return children;
    }
}
